import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "../componentes/About";
import { MovieDetail } from "../componentes/MovieDetail";
import Navbar from "../componentes/Navbar";
import { SearchResults } from "../componentes/SearchResults";
import Home from "../componentes/Home";
import { Footer } from "../componentes/Footer";
import ScrollToTop from "../componentes/ScrollToTop";
import { AltHome } from "../componentes/AltHome";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
          {/* <AltHome /> */}
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
      <Footer />
    </BrowserRouter>
  );
};
