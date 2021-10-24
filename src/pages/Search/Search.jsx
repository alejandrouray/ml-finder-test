import React, { useEffect, useState } from 'react';

import Breadcrumb from '@components/breadcrumb';
import ProductList from '@components/productList';
import Loading from '@components/loading';
import Error from '@components/error';

import { fetchAPI, useQuery } from '@utils/';
import { useGlobalContext } from '@context/globalContext';

import './Search.sass';

const Search = () => {
  const query = useQuery();
  const { loading, toggleLoading } = useGlobalContext();

  const [results, setResults] = useState({ items: [] });
  const [lastQuery, setLastQuery] = useState();
  const search = query && query.get('search');

  useEffect(() => {
    const getInitialData = async () => {
      const response = await toggleLoading(
        () => fetchAPI(`items?q=:${search}`),
      );

      setResults(response);
      setLastQuery(search);
    };

    if (search && lastQuery !== search) getInitialData();
  }, [search]);

  return (
    <div className="search__container">
      {loading && (<Loading />)}
      {results && results.items.length
        ? (
          <>
            <Breadcrumb categories={results.categories} />
            <ProductList products={results.items} />
          </>
        ) : <Error />}
    </div>
  );
};

export default Search;
