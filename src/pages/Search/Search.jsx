import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductList from '../../components/ProductList/ProductList';
import { fetchAPI } from '../../utils';
import './Search.sass';

const useQuery = () => new URLSearchParams(useLocation().search);

const Search = () => {
    const query = useQuery();
    const history = useHistory();
    const [results, setResults] = useState([]);
    const [lastQuery, setLastQuery] = useState();

    const search = query.get('search');
    !search && history.push('/');
  
    useEffect(() => {
        const getInitialData = async () => {
            setResults(await fetchAPI(`items?q=:${search}`));
            setLastQuery(search);
        }

        lastQuery !== search && getInitialData();
    }, [search, lastQuery]);
  
    return (
        <div className="search__container">
            <Breadcrumb categories={results.categories} />
            <ProductList products={results.items} />
        </div>
    );
};


export default Search;