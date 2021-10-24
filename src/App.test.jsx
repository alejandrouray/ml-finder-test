import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('It should return this elements', () => {
    const component = render(
      <App />,
    );

    expect(component.getByAltText('Logo Mercado Libre')).toBeInTheDocument();
    expect(component.getByPlaceholderText('Nunca dejes de buscar')).toBeInTheDocument();
  });
});
