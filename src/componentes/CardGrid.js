import React from "react";
import Container from "@material-ui/core/Container";
import { GridListTile, GridListTileBar } from "@material-ui/core";
//import CardMovie from "./MovieCard";

const CardGrid = ({ movies }) => {
  return (
    <Container>
      {/* en el caso de que la card se implemente junto en conjunto a la grid se
      remplaza con este codigo, que le pasa como prop la info de movie a la card
      {movies.map((tile) => (
      <CardMovie movie={tile} key={tile.id} /> */}

      {movies.map((tile) => (
        <GridListTile key={tile.title}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${tile.poster_path}`}
            alt={tile.title}
          />
          <GridListTileBar title={tile.title} />
        </GridListTile>
      ))}
    </Container>
  );
};

export default CardGrid;
