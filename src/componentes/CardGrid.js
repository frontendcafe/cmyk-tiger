import React from "react";
import Container from "@material-ui/core/Container";
import { GridListTile, GridListTileBar } from "@material-ui/core";
import MovieCard from "./MovieCard";

const CardGrid = ({ movies }) => {
  return (
    <Container>
      {movies.map((tile) => (
        <MovieCard movie={tile} key={tile.id} />
      ))}
      {/* {movies.map((tile) => (
        <GridListTile key={tile.title}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${tile.poster_path}`}
            alt={tile.title}
          />
          <GridListTileBar title={tile.title} />
        </GridListTile> */}
    </Container>
  );
};

export default CardGrid;
