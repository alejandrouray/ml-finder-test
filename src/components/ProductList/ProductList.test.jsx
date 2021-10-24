import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ProductList from '@components/productList';
import mock from './ProductList.mock.json';

describe('ProductList component', () => {
  test('It should return the same number of elements that the products prop contains', () => {
    const component = render(<ProductList products={mock.results} />);

    expect(component.getAllByRole('listitem')).toHaveLength(mock.results.length);
  });

  test('It should return an empty element if the products prop do not contain valid data', () => {
    expect(render(<ProductList products={[]} />).container).toBeEmptyDOMElement();
  });
});
