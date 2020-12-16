import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MovieCard from "./MovieCard";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "./Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const CardGrid = ({ category = "", query = "" }) => {

  const classes = useStyles();
  let url;

  if (!category) {
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=es-AR&sort_by=popularity`;
  } else {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  }

  const { data, loading, error } = useFetch(url);

  return (
    <Container>
      { loading && <Spinner />}
      {
        data &&
        <Grid container spacing={3} className={classes.root}>
          {data.map((movie) => (
            <Grid item key={movie.id} lg={3} md={4} sm={6} xs={12}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      }

    </Container>
  );
};

export default CardGrid;
