import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { fetchAPI, formatCurrency } from '../../utils';
import './Product.sass';

const Product = () => {
    const history = useHistory();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const setCondition = (rawData) => {
        const dictionary = {
            new: 'Nuevo',
            used: 'Usado'
        }

        return dictionary[rawData] || rawData;
    }
  
    useEffect(() => {
        const getInitialData = async () => {
            const response = await fetchAPI(`items/${id}`);

            response.item
                ? setProduct(response.item)
                : history.push('/notFound');
        }

        !product.id && getInitialData();
    }, [id, product, history]);

    return (
        <div className="product__container">
            <Breadcrumb />
            {product.id && (
                <div className="product__sub-container">
                    <div className="product__main">
                        <img className="product__main-picture" src={product.picture} alt={product.title} />
                        <div className="product__main-details">
                            <span className="product__main-details-condition">
                                {setCondition(product.condition)} - {product.sold_quantity} vendidos
                            </span>
                            <span className="product__main-details-title">{product.title}</span>
                            <div className="product__main_details-price">
                                {formatCurrency(product.price.amount)}
                                <span className="product__main_details-price-decimals">{product.price.decimals}</span>
                            </div>
                            <button className="product__main_details-button">Comprar</button>
                        </div>
                        <div className="product__main-description">
                            <span className="product__main-description-subtitle">Descripción del producto</span>
                            <p className="product__main-description-text">
                                {product.description || 'No existe descripción para este producto'}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};


export default Product;