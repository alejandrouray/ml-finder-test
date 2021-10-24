import React from 'react';
import Proptypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { formatCurrency } from '@utils/';
import './ProductListItem.sass';

const ProductListItem = ({
  id, picture, price, state, title,
}) => {
  const history = useHistory();
  const toProductPage = () => history.push(`/items/${id}`);

  return (
    <div className="product-list-item__container" role="listitem">
      <img
        className="product-list-item__picture"
        onClick={toProductPage}
        src={picture}
        alt={title}
      />
      <div className="product_list_item__main">
        <span className="product_list_item__main-price">
          {formatCurrency(price)}
        </span>
        <h2
          className="product_list_item__main-title"
          onClick={toProductPage}
        >
          {title}
        </h2>
      </div>
      <span className="product_list_item__state">{state}</span>
    </div>
  );
};

ProductListItem.propTypes = {
  id: Proptypes.string.isRequired,
  picture: Proptypes.string,
  price: Proptypes.number,
  state: Proptypes.string,
  title: Proptypes.string.isRequired,
};

ProductListItem.defaultProps = {
  picture: './placeholder.png',
  price: 0,
  state: '',
};

export default ProductListItem;
