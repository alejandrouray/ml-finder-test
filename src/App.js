import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from 'home/Home';
import Search from './pages/Search/Search';
import Product from './pages/Product/Product';
import NotFound from './pages/NotFound/NotFound';

import SearchBar from './components/SearchBar/SearchBar';
import { GlobalProvider } from './context/globalContext';

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
