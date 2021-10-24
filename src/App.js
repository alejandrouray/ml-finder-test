import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from '@pages/home';
import Search from '@pages/search';
import Product from '@pages/product';
import NotFound from '@pages/notFound';

import SearchBar from '@components/searchBar';
import { GlobalProvider } from '@context/globalContext';

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <SearchBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/items/:id">
            <Product />
          </Route>
          <Route path="/items">
            <Search />
          </Route>
          <Route path="/notFound">
            <NotFound />
          </Route>
          <Route exact path="/*">
            <Redirect to="/notFound" />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}
