/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductList from '../../components/ProductList/ProductList';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import { fetchAPI } from '../../utils';
import { useGlobalContext } from '../../context/globalContext';

import './Search.sass';

const useQuery = () => new URLSearchParams(useLocation().search);

const Search = () => {
    const query = useQuery();
    const history = useHistory();
    const { loading, toggleLoading } = useGlobalContext();

    const [results, setResults] = useState();
    const [lastQuery, setLastQuery] = useState();

    const search = query.get('search');
    !search && history.push('/');
  
    useEffect(() => {
        const getInitialData = async () => {
            const response = await toggleLoading(
                () => fetchAPI(`items?q=:${search}`)
            );
            
            setResults(response);
            setLastQuery(search);
        }

        lastQuery !== search && getInitialData();
    }, [search, lastQuery]);
  
    return (
        <div className="search__container">
            {loading
                ? <Loading />
                : (
                    results && results.items.length 
                        ? (
                            <>
                                <Breadcrumb categories={results.categories} />
                                <ProductList products={results.items} />
                            </>
                        ) : <Error />
                )
            }
        </div>
    );
};


export default Search;