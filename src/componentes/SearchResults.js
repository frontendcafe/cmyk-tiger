import { Container, Typography } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom';
import CardList from './CardList';

export const SearchResults = () => {
  let { query } = useParams();

  return (
    <Container>
      <Typography variant="h3" align="center" paragraph>
        Search Results for: {query}
      </Typography>
      {
        // no soy muy fan de poner la URl en las props
        // habrá una forma de implementarlos de otra manera?
        <CardList title=" " url={`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`} />
      }
    </Container>
  )
}
