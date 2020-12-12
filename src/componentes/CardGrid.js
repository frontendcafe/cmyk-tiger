import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const CardGrid = ({ movies }) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={3} className={classes.root}>
        {movies.map((movie) => (
          <Grid item key={movie.id} lg={3} md={4} sm={6} xs={12}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardGrid;
