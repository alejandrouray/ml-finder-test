export const fetchAPI = async (url, data, method = 'GET') =>
    (await fetch(`${process.env.REACT_APP_API_ENDPOINT}/${url}`, {
      headers: { 'Content-Type': 'application/json' },
})).json();

export const formatCurrency = (price) => 
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  })
    .format(parseInt(price))
    .replace(',','.');