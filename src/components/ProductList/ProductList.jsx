import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.sass';

const ProductList = ({ products }) =>
    products.length && Array.isArray(products) ? (
        <div className="product-list__container" role="list">
            {products.map(x => 
                <ProductListItem
                    key={x.id}
                    id={x.id}
                    title={x.title}
                    price={x.price.amount}
                    picture={x.picture}
                    state={x.state_name}
                />
            )}
        </div>
    ) : <></>;


export default ProductList;