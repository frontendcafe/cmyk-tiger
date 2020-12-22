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

const CardGrid = ({ data }) => {
  const classes = useStyles();

  console.log(data);
  return (
    <Container>
      {/* {loading && <Spinner />} */}
      {data && (
        <Grid container spacing={3} className={classes.root}>
          {data.map((movie) => (
            <Grid item key={movie.id} lg={3} md={3} sm={3} xs={6}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default CardGrid;
