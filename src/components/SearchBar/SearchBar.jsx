/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './SearchBar.sass';

const SearchBar = () => {
    const history = useHistory();
    const [query, setQuery] = useState();
    
    const sendData = () => {
        if (!query) return false;
        history.push(`/items/?search=${query}`);
    };

    const saveData = (e) => setQuery(e.target.value);
    const toHome = () => {
        setQuery('');
        document.getElementsByClassName('search-bar__input')[0].value = '';
        history.push('/');
    };
    const handleKeyDown = (event) => event.key === 'Enter' && sendData();

    return (
        <div className="search-bar__container">
            <img className="search-bar__logo" src="logo.png" alt="Logo Mercado Libre" onClick={toHome} />
            <input 
                className="search-bar__input"
                placeholder="Nunca dejes de buscar"
                onChange={saveData}
                onKeyDown={handleKeyDown}
            />
            <button className="search-bar__button" onClick={sendData}>
                <img className="search-bar__button-icon" src="search.png" alt="Ícono Buscar" />
            </button>
        </div>
    );
};

export default SearchBar;
