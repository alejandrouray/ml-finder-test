import { useLocation } from "react-router";
const { REACT_APP_API_ENDPOINT } = process.env;

export const fetchAPI = async (url) =>
  await (await fetch(`${REACT_APP_API_ENDPOINT}/${url}`)).json();

export const formatCurrency = (price) => 
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(parseInt(price))
    .replace(',','.');

export const useQuery = () => new URLSearchParams(useLocation().search);

export const setCondition = (rawData) => {
  const dictionary = {
      new: 'Nuevo',
      used: 'Usado'
  }

  return dictionary[rawData] || rawData;
};

export const setDescription = (description) =>
  description || 'No existe descripción para este producto';