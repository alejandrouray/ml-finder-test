import React from 'react';
import { useHistory } from 'react-router';
import './ProductListItem.sass';

const ProductListItem = ({ id, picture, price, state, title }) => {
    const history = useHistory();
    const handleClick = () => history.push(`/items/${id}`);

    return (
        <div className="product-list-item__container" role="listitem">
            <img 
                className="product-list-item__picture"
                onClick={handleClick}
                src={picture}
                alt={title}
            />
            <div className="product_list_item__main">
                <span className="product_list_item__main-price">$ {price}</span>
                <h2 className="product_list_item__main-title" onClick={handleClick}>{title}</h2>
            </div>
            <span className="product_list_item__state">{state}</span>
        </div>
    );
};


export default ProductListItem;