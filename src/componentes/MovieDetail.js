import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Chip from "@material-ui/core/Chip";

import { Button, Divider, Icon, makeStyles } from "@material-ui/core";

import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "./Spinner";

const useStyles = makeStyles((theme) => ({
  tagline: {
    padding: '0',
    marginTop: '-3rem',
    fontStyle: 'italic'
  },
  margin: {
    marginTop: '2rem',
    marginLeft: '50%',
    transform: 'translateX(-100%)'
  },
  poster: {
    transition: 'all ease 0.4s',
    boxShadow: '-4px 4px 10px 1px #311412',
    maxWidth: "350px",
    width: "100%",
    filter: 'grayscale(30%)',
    borderRadius: "10px",
    '&:hover': {
      filter: 'grayscale(0%)',
      boxShadow: '-4px 4px 10px 1px #ae6e17'
    }
  },
}));

export const MovieDetail = () => {
  const { id } = useParams();

  const { data: peli, loading } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`);

  const classes = useStyles();

  if (loading) {
    return (
      <Spinner />
    )
  } else if (peli && peli.length !== 0) {

    return (
      <Container>
        <Grid container justify='center' spacing={2}>
          <Grid container item justify='center' xs={12} md={4}>

            <Grid item>
              <a
                href={`https://imdb.com/title/${peli.imdb_id}`}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className={classes.poster}
                  src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`}
                  alt=''
                />
              </a>
            </Grid>
          </Grid>
          <Grid item container direction='column' spacing={8} xs={12} md={8}>
            <Grid item container spacing={3}>
              <Grid item>
                <Typography variant='h4'>
                  {peli.original_title} ({peli.release_date.slice(0, 4)})
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction='row'
                spacing={2}
                alignItems='center'
              >
                {peli.genres.map((genre) => (
                  <Grid item>
                    <Chip
                      size='normal'
                      variant='default'
                      color='primary'
                      label={`${genre.name}`}
                    />
                  </Grid>
                ))}
                <Grid item>
                  <Typography variant='body1'>{peli.runtime} min</Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direcion='row'
                alignItems='center'
                spacing={2}
              >
                <Grid item>
                  <Rating
                    name='half-rating-read'
                    defaultValue={peli.vote_average}
                    precision={0.1}
                    max={10}
                    size='large'
                    readOnly
                  />
                </Grid>
                <Grid>
                  <Typography variant='h6'>{peli.vote_average}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item direction='column' container spacing={2}>
              <Grid item>
                <Typography className={classes.tagline} variant='subtitle1'>{peli.tagline}</Typography>
              </Grid>
              <Grid item>
                <Typography variant='h6'>Overview</Typography>
              </Grid>
              <Grid item>
                <Typography varian='subtitle1'>{peli.overview}</Typography>
              </Grid>
              <Link to="/">
                <Button variant="contained" size="medium" color="primary" size="medium" className={classes.margin}>
                  Back
              </Button></Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
