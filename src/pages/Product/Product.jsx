/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Loading from '../../components/Loading/Loading';
import { useGlobalContext } from '../../context/globalContext';
import { fetchAPI, formatCurrency } from '../../utils';
import './Product.sass';

const Product = () => {
    const history = useHistory();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { loading, toggleLoading } = useGlobalContext();
    const setCondition = (rawData) => {
        const dictionary = {
            new: 'Nuevo',
            used: 'Usado'
        }

        return dictionary[rawData] || rawData;
    }
  
    useEffect(() => {
        const getInitialData = async () => {
            const response = await toggleLoading(
                () => fetchAPI(`items/${id}`)
            );

            response.item
                ? setProduct(response.item)
                : history.push('/notFound');
        }

        console.log(product.id, loading);

        !product.id && getInitialData();
    }, [id, product, history]);

    return (
        <div className="product__container">
            {loading 
                ? <Loading />
                : (
                    <>
                        <Breadcrumb />
                        {product.id && (
                            <div className="product__sub-container">
                                <div className="product__main">
                                    <img 
                                        alt={product.title}
                                        className="product__main-picture"
                                        src={product.picture}
                                    />
                                    <div className="product__main-details">
                                        <span className="product__main-details-condition">
                                            {setCondition(product.condition)} - {product.sold_quantity} vendidos
                                        </span>
                                        <span className="product__main-details-title">{product.title}</span>
                                        <div className="product__main_details-price">
                                            {formatCurrency(product.price.amount)}
                                            <span className="product__main_details-decimals">{product.price.decimals}</span>
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
                    </>
                )
            }
        </div>
    )
};


export default Product;