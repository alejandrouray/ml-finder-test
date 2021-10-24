import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './SearchBar.sass';

const SearchBar = () => {
  const history = useHistory();
  const [query, setQuery] = useState();

  const sendData = () => query && history.push(`/items/?search=${query}`);
  const saveData = (e) => setQuery(e.target.value);
  const handleKeyDown = (event) => event.key === 'Enter' && sendData();

  const toHome = () => {
    setQuery('');
    document.getElementsByClassName('search-bar__input')[0].value = '';
    history.push('/');
  };

  return (
    <div className="search-bar__container">
      <img
        alt="Logo Mercado Libre"
        className="search-bar__logo"
        onClick={toHome}
        src="logo.png"
      />
      <input
        className="search-bar__input"
        placeholder="Nunca dejes de buscar"
        onChange={saveData}
        onKeyDown={handleKeyDown}
      />
      <button className="search-bar__button" type="button" onClick={sendData}>
        <img className="search-bar__button-icon" src="search.png" alt="Ícono Buscar" />
      </button>
    </div>
  );
};

export default SearchBar;
