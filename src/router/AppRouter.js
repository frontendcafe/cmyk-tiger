import React from 'react'
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from '../componentes/About';
import CardGrid from "../componentes/CardGrid";
import { MovieDetail } from "../componentes/MovieDetail";
import Navbar from "../componentes/Navbar";

export const AppRouter = () => {
  const [pelis, setPelis] = useState(null);

  console.log(pelis);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=es-AR&sort_by=popularity`;

    const resp = await fetch(url);
    const data = await resp.json();

    setPelis(data.results);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar handleSubmit={setPelis} />
        <Switch>
          <Route exact path="/">
          {pelis && <CardGrid movies={pelis} /> }
          </Route>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </BrowserRouter>
    </div>
  )
}
