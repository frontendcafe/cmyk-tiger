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
  tagline: {
    padding: "0",
    marginTop: "-3rem",
    fontStyle: "italic",
  },
  margin: {
    marginTop: "2rem",
    margin: "auto",
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
    fontSize: "1.2rem",
  },
  bgContainer: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "screen",
    marginTop: "-3rem",
    height: "80vh",
    display: "flex",
    alignItems: "center",
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
        <Grid container justify='center' spacing={2}>
          <Grid container item justify='center' lg={3} md={3} sm={3} xs={6}>
            <Grid item>
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
          </Grid>
          <Grid item container direction='column' spacing={8} xs={12} md={8}>
            <Grid item container spacing={3}>
              <Grid item>
                <Typography className={classes.title}>
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
                  <Grid key={genre.name} item>
                    <Chip
                      size='medium'
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
                  <Typography className={classes.title}>
                    {peli.vote_average}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item direction='column' container spacing={2}>
              <Grid item>
                <Typography className={classes.tagline} variant='subtitle1'>
                  {peli.tagline}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h6'>Overview</Typography>
              </Grid>
              <Grid item>
                <Typography varian='subtitle1'>{peli.overview}</Typography>
              </Grid>
              <Grid item>
                <Typography variant='h6'>
                  Streaming sites availabe (Argentina)
                </Typography>
              </Grid>
              <Grid item>
                {peli["watch/providers"].results.AR.flatrate.map((site) => (
                  <img
                    src={`http://image.tmdb.org/t/p/original/${site.logo_path}`}
                    alt={site.provider_name}
                    className={classes.providers}
                  />
                ))}
              </Grid>
              <Link className={classes.margin} to='/'>
                <Button variant='contained' size='medium' color='primary'>
                  Back
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
};
