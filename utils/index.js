export const fetchAPI = async (url, data, method) => {
    const setArguments = method
      ? { method }
      : {
        method: method || 'POST',
        body: JSON.stringify(data || {}),
      };
  
    return (await fetch(`${process.env.REACT_APP_API_ENDPOINT}/${url}`, {
      ...setArguments,
      headers: { 'Content-Type': 'application/json' },
    })).json();
};