import React from "react";
import Container from "@material-ui/core/Container";
import CardList from "./CardList";

const Home = () => {
  // no soy muy fan de poner la URl en las props
  // habrá una forma de implementarlos de otra manera?
  return (
    <Container>
      <CardList
        title='Most Popular'
        url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=es-AR&sort_by=popularity`}
      />
      <CardList
        title='Currently in Theaters'
        url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=es-AR&sort_by=popularity`}
      />
    </Container>
  );
};

export default Home;
