import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const CardGrid = ({ movies }) => {
  return (
    <Container>
      <Grid container fluid spacing={6}>
        {movies.map((movie) => (
          <Grid item xs={3}></Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardGrid;
