import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "../componentes/About";
import CardGrid from "../componentes/CardGrid";
import { MovieDetail } from "../componentes/MovieDetail";
import Navbar from "../componentes/Navbar";
import { SearchResults } from "../componentes/SearchResults";
import Home from "../componentes/Home";

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/movie/:id'>
            <MovieDetail />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/search/:query'>
            <SearchResults />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
