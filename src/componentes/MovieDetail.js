import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

import { makeStyles } from "@material-ui/core";
import { peli } from "../peli";

const useStyles = makeStyles((theme) => ({
  poster: {
    maxWidth: "350px",
    borderRadius: "10px",
  },
}));

export const MovieDetail = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction='row' spacing={0} justify='center'>
        <Grid item xs={4}>
          <a href={`https://imdb.com/title/${peli.imdb_id}`} target='_blank'>
            <img
              className={classes.poster}
              src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`}
              alt=''
            />
          </a>
        </Grid>
        <Grid item container direction='column' spacing={8} xs={8}>
          <Grid item container spacing={3}>
            <Grid item>
              <Typography variant='h3'>
                {peli.original_title} ({peli.release_date.slice(0, 4)})
              </Typography>
            </Grid>
            <Grid item container direction='row' spacing={2}>
              <Grid item>
                <Typography variant='body1'>
                  {peli.genres.map((genre) => `${genre.name}`).join(", ")}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>{peli.runtime} min</Typography>
              </Grid>
            </Grid>
            <Grid item container direcion='row' alignItems='center' spacing={2}>
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
          <Grid item container spacing={2}>
            <Grid item>
              <Typography variant='h5'>Reseña</Typography>
            </Grid>
            <Grid item>
              <Typography varian='body2'>{peli.overview}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
