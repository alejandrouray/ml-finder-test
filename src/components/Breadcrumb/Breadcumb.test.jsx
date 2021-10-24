import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { GlobalProvider } from '@context/globalContext';
import Breadcrumb from './Breadcrumb';
import { categories } from './Breadcrumb.mock.json';

describe('Breadcrumb component', () => {
  const DEFAULT_VALUE = 'Electronica Audio y Video &gt; iPod &gt; Reproductores &gt; Ipod touch &gt; 32 GB';

  test('It should return the default value', () => {
    const component = render(
      <GlobalProvider>
        <Breadcrumb categories={[]} />
      </GlobalProvider>,
    );

    expect(component.container.firstChild.innerHTML).toBe(DEFAULT_VALUE);
  });

  test('It should return the default value if the component is out of context', () => {
    const component = render(
      <Breadcrumb categories={categories} />,
    );

    expect(component.container.firstChild.innerHTML).toBe(DEFAULT_VALUE);
  });

  test('It should return the value of the first four categories', () => {
    const component = render(
      <GlobalProvider>
        <Breadcrumb categories={categories} />
      </GlobalProvider>,
    );

    expect(component.container.firstChild.innerHTML)
      .toBe(`${categories[0]} &gt; ${categories[1]} &gt; ${categories[2]} &gt; ${categories[3]}`);
  });
});
