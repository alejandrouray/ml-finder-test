import React from 'react';
import Proptypes from 'prop-types';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.sass';

const ProductList = ({ products }) => (products.length && Array.isArray(products) ? (
  <div className="product-list__container" role="list">
    {products.map((x) => (
      <ProductListItem
        key={x.id}
        id={x.id}
        title={x.title}
        price={x.price.amount}
        picture={x.picture}
        state={x.state_name}
      />
    ))}
  </div>
) : <></>);

ProductList.propTypes = {
  products: Proptypes.arrayOf(Proptypes.shape({
    id: Proptypes.string,
    title: Proptypes.string,
    price: Proptypes.number,
    picture: Proptypes.string,
    state: Proptypes.string,
  })),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
