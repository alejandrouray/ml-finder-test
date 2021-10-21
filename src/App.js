import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './pages/Home/Home';
import Search from "./pages/Search/Search";
import Product from "./pages/Product/Product";

import SearchBar from "./components/SearchBar/SearchBar";
import { GlobalProvider } from "./context/globalContext";

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
            <Route exact path="/">
              <Redirect to="/" />
            </Route>
          </Switch>
      </Router>
    </GlobalProvider>
  );
}
