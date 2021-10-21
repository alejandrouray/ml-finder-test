import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const { AUTHOR_NAME, AUTHOR_LAST_NAME, ML_ENDPOINT, PORT } = process.env;
const app = express();

const author = {
    name: AUTHOR_NAME,
    lastName: AUTHOR_LAST_NAME
};

const fetchAPI = async (url) =>
    await (await fetch(`${ML_ENDPOINT}/${url}/`)).json();

const getPictureFromItem = async (id, previous) => {
    const findPicture = (pictures) => pictures.find(x => x.url)['url'];

    if (previous) return findPicture(previous);
    
    const { pictures } = await fetchAPI(`items/${id}`);
    
    return findPicture(pictures);
};

const getCategoriesFromFilters = (filters = []) => {
    const categoriesData = filters.find(x => x.id === 'category');
    
    return categoriesData
        ? categoriesData.values.map(x => x.name)
        : [];
}

const formatDecimals = (price) => {
    const decimal = Math.round((price % 1) * 100);
    return decimal < 10
        ? `0${decimal}`
        : decimal;
}

const createInterface = async (data) =>
    ({
        id: data.id,
        title: data.title,
        price: {
            currency: data.currency_id,
            amount: data.price,
            decimals: formatDecimals(data.price)
        },
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        picture: await getPictureFromItem(data.id, data.pictures)
    })

app.use(express.json({ extended: true }));
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Allow', 'GET, POST');
    next();
});

app.get('/api/items/:id', async (req, res) => {
    const { id } = req.params;
    const {...item } = await fetchAPI(`items/${id}`);
    const { plain_text: plainText } = await fetchAPI(`items/${id}/description`);

    const response = {
        author,
        item: {
            ...await createInterface(item),
            sold_quantity: item.sold_quantity,
            description: plainText,
        }
    }

    res.send(response);
});

app.get('/api/items', async (req, res) => {
    const { q: search } = req.query;
    
    try {
        const { 
            available_filters: filters,
            results,
            ...rest
        } = await fetchAPI(`sites/MLA/search?q=​:${search}`);

        const sample = results.slice(0,4);
        const items = await Promise.all(
            sample.map(async (x) => ({
                ...await createInterface(x),
                state_name: x.address.state_name
            }))
        );

        const response = {
            author,
            categories: getCategoriesFromFilters(filters),
            items,
            ...rest
        }
        
        res.send(response);
    } catch (err) {
        res.send(err);
    }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});