import React from "react";
import Container from "@material-ui/core/Container";
import { GridListTile, GridListTileBar } from "@material-ui/core";
import CardMovie from "./MovieCard";

const CardGrid = ({ movies }) => {
  return (
    <Container>
      {movies.map((tile) => (
        <GridListTile key={tile.title}>
          {/* {movies.map((tile) => (
            <CardMovie movie={tile} key={tile.id} />
          ))} */}
          <GridListTileBar title={tile.title} />
        </GridListTile>
      ))}
    </Container>
  );
};

export default CardGrid;
