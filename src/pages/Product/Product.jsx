import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchAPI } from '../../utils';
import './Product.sass';

const Product = () => {
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
            setProduct(await fetchAPI(`items/${id}`));
        }

        !product.id && getInitialData();
    }, [id, product]);

    return (
        <div className="product__container">
            {product.item && (
                <div className="product__sub-container">
                    <div className="product__main">
                        <img className="product__main-picture" src={product.item.picture} alt={product.item.title} />
                        <div className="product__main-details">
                            <span className="product__main-details-condition">
                                {setCondition(product.item.condition)} - {product.item.sold_quantity} vendidos
                            </span>
                            <span className="product__main-details-title">{product.item.title}</span>
                            <div className="product__main_details-price">
                                $ {product.item.price.amount}
                                <span className="product__main_details-price-decimals">{product.item.price.decimals}</span>
                            </div>
                            <button className="product__main_details-button">Comprar</button>
                        </div>
                        <div className="product__main-description">
                            <span className="product__main-description-subtitle">Descripción del producto</span>
                            <p className="product__main-description-text">{product.item.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};


export default Product;