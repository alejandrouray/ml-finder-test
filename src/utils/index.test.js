import {
  formatCurrency, useQuery, setCondition, setDescription,
} from './index';
import mocks from './index.mocks.json';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({ search: '?search=apple' }),
}));

describe('Utils', () => {
  test('It should return the search value', () => {
    const query = useQuery();

    expect(query.get('search')).toBe('apple');
  });

  test('It should return the spanish value', () => {
    const conditionA = setCondition('new');
    const conditionB = setCondition('used');
    const conditionC = setCondition('another condition');

    expect(conditionA).toBe('Nuevo');
    expect(conditionB).toBe('Usado');
    expect(conditionC).toBe('another condition');
  });

  test('It should return the description and if it does not have, a default message', () => {
    const descriptionA = setDescription(mocks.description);
    const descriptionB = setDescription(null);

    expect(descriptionA).toBe(mocks.description);
    expect(descriptionB).toBe('No existe descripción para este producto');
  });

  test('It should return the value of the formatted currency', () => {
    const currencyA = formatCurrency(9998);
    const currencyB = formatCurrency(10098.00);

    expect(currencyA).toBe('$ 9.998');
    expect(currencyB).toBe('$ 10.098');
  });
});
