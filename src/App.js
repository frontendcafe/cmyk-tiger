import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import CardGrid from "./componentes/CardGrid";
import { MovieDetail } from "./componentes/MovieDetail";
import Navbar from "./componentes/Navbar";

function App() {
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
      <Navbar />
      <Switch>
        <Route exact path="/">
        {pelis && <CardGrid movies={pelis} /> }
        </Route>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </BrowserRouter>
            
    </div>
  );
}

export default App;
