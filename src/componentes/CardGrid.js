import React from "react";
import Container from "@material-ui/core/Container";
import { GridListTile, GridListTileBar } from "@material-ui/core";
//import CardMovie from "./MovieCard";

const CardGrid = ({ movies }) => {
  return (
    <Container>
      {movies.map((tile) => (
        <GridListTile key={tile.title}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${tile.poster_path}`}
            alt={tile.title}
          />
          <GridListTileBar title={tile.title} />
          {/* <CardMovie movie={tile} /> */}
        </GridListTile>
      ))}
    </Container>
  );
};

export default CardGrid;
