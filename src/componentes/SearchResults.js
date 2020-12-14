import { Container, Typography } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom';
import CardGrid from './CardGrid';

export const SearchResults = () => {
  let {query} = useParams();

  return (
    <Container>
      <Typography variant="h3" align="center" paragraph>
        Search Results for: {query}
      </Typography>
      {
        <CardGrid category="Search" query={query} />
      }
    </Container>
  )
}
