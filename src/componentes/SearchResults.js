import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import CardGrid from './CardGrid';
import { Spinner } from './Spinner';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
  },
}));

export const SearchResults = () => {
  const classes = useStyles();

  let { query } = useParams();
  const { data, loading } = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)

  if (loading) {
    return (
      <Spinner />
    )
  } else if (data && data.results.length !== 0) {
    return (
      <Container>
        <Typography variant="h4" align="center" paragraph>
          Search Results for: {query}
        </Typography>

        <CardGrid data={data.results} />

      </Container>
    )
  } else {
    return (
      <Container className={classes.cardContainer}>
        <h3>No results, try again.</h3>
      </Container>
    )
  }
}
