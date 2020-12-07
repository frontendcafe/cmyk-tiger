import { useEffect, useState } from "react";
import "./App.css";
import CardGrid from "./componentes/CardGrid";
import Navbar from "./componentes/Navbar";

function App() {
  const [pelis, setPelis] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&sort_by=popularity`;

    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data);
    setPelis(data.results);
  }

  return (
    <div>
      <Navbar />
      <header>
        <h1>Header</h1>
      </header>
      {pelis && <CardGrid movies={pelis} />}
    </div>
  );
}

export default App;
