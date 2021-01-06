import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Chip from "@material-ui/core/Chip";
import no_image from "../assets/no_image.png";

import { Button, makeStyles } from "@material-ui/core";

import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "./Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 5,
  },
  tagline: {
    padding: "0",
    //marginTop: "-3rem",
    fontStyle: "italic",
  },
  margin: {
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
    },
  },
  chip: {
    marginRight: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 5,
    },
  },
  poster: {
    transition: "all ease 0.4s",
    boxShadow: "-4px 4px 10px 1px #311412",
    maxWidth: "350px",
    width: "100%",
    filter: "grayscale(30%)",
    borderRadius: "10px",
    "&:hover": {
      filter: "grayscale(0%)",
      boxShadow: "-4px 4px 10px 1px #ae6e17",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      // color: 'red',
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      // color: 'green',
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
  },
  poster_container: {
    display: "grid",
    placeItems: "center",
    marginTop: 0,
    marginBottom: 15,
    [theme.breakpoints.down("sm")]: {
      marginTop: -50,
    },
  },
  bgContainer: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "screen",
    marginTop: "-5px",
    height: "80vh",
    [theme.breakpoints.down("xs")]: {
      height: "180vh",
    },
    display: "flex",
    alignItems: "center",
  },
  vote_average: {
    fontSize: ".8rem",
  },
  providers: {
    margin: "0 .3rem",
    borderRadius: "10px",
    maxWidth: "70px",
  },
}));

export const MovieDetail = () => {
  const { id } = useParams();

  const { data: peli, loading } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&append_to_response=watch/providers`
  );

  const classes = useStyles();

  if (loading) {
    return <Spinner />;
  } else if (peli && peli.length !== 0) {
    return (
      <Container
        className={classes.bgContainer}
        maxWidth={false}
        style={{
          backgroundImage: `linear-gradient(rgba(230,230,230,0.8),rgba(230,230,230,0.9)) ,url('//image.tmdb.org/t/p/w1920_and_h800_multi_faces/${peli.backdrop_path}')`,
        }}
      >
        <Grid justify='center' container alignItems='center' spacing={5}>
          <Grid item xs={10} sm={4} lg={5} className={classes.poster_container}>
            <a
              href={`https://imdb.com/title/${peli.imdb_id}`}
              target='_blank'
              rel='noreferrer'
            >
              <img
                className={classes.poster}
                src={
                  peli.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${peli.poster_path}`
                    : no_image
                }
                alt=''
              />
            </a>
          </Grid>

          <Grid item xs={10} sm={8} lg={5} className={classes.margin}>
            <Typography className={classes.title}>
              {peli.original_title} ({peli.release_date.slice(0, 4)})
            </Typography>

            <Grid item>
              {peli.genres.map((genre) => (
                <Chip
                  key={genre.name}
                  className={classes.chip}
                  size='medium'
                  variant='default'
                  color='primary'
                  label={`${genre.name}`}
                />
              ))}
            </Grid>

            <Grid item>
              <Typography variant='caption'>{peli.runtime} min</Typography>
            </Grid>

            <Grid item container direcion='row' alignItems='center' spacing={1}>
              <Grid item>
                <Rating
                  name='half-rating-read'
                  defaultValue={peli.vote_average}
                  precision={0.1}
                  max={10}
                  size='small'
                  readOnly
                />
              </Grid>
              <Grid>
                <Typography variant='caption'>{peli.vote_average}</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography className={classes.tagline} variant='subtitle1'>
                {peli.tagline}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6' style={{ marginTop: "1rem" }}>
                Overview
              </Typography>
            </Grid>
            <Grid item>
              <Typography varian='subtitle1'>{peli.overview}</Typography>
            </Grid>
            <Grid item style={{ marginTop: "1rem" }}>
              <Typography variant='h6'>
                Streaming sites availabe (Argentina)
              </Typography>
            </Grid>
            <Grid item>
              {peli["watch/providers"].results.AR?.flatrate ? (
                peli["watch/providers"].results.AR.flatrate.map((site) => (
                  <img
                    src={`http://image.tmdb.org/t/p/original/${site.logo_path}`}
                    alt={site.provider_name}
                    className={classes.providers}
                    key={site.provider_id}
                  />
                ))
              ) : (
                <Typography variant='subtitle1'>
                  No streaming services available
                </Typography>
              )}
            </Grid>
            <Link to='/'>
              <Button
                className={classes.margin}
                variant='contained'
                size='medium'
                color='primary'
              >
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    );
  }
};
