import React from 'react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import ProductListItem from './ProductListItem';
import mock from './ProductListItem.mock.json';
import { formatCurrency } from '../../utils';

describe('ProductList component', () => {
  const setup = () => {
    const history = createMemoryHistory();
    const component = render(
      <Router history={history}>
        <ProductListItem {...mock} />
      </Router>,
    );

    const image = component.getByRole('img');
    const title = component.getByRole('heading');
    const state = component.getByText(mock.state);
    const price = component.getByText(formatCurrency(mock.price));

    return {
      history, image, price, state, title,
    };
  };

  test('It should return this elements', () => {
    const {
      image, price, state, title,
    } = setup();

    expect(title.innerHTML).toBe(mock.title);
    expect(image.src).toBe(mock.picture);

    expect(state && price).toBeInTheDocument();
    expect(state.tagName && price.tagName).toBe('SPAN');
  });

  test('It should redirect to the product page when image/title is clicked', () => {
    const { history, image, title } = setup();
    const testRedirect = (el) => {
      fireEvent.click(el);

      expect(history.location.pathname).toBe(`/items/${mock.id}`);
      expect(history.length).toBe(2);

      history.goBack();
    };

    testRedirect(image);
    testRedirect(title);
  });
});
