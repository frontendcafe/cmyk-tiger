import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      /* width: "100%", */
      /*  height: "100%", */
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    img: {
      maxWidth: "100%",
      borderRadius: "10px",
    },
    title: {
      color: "#000000",
      textAlign: "center",
      justifySelf: "center",
    },
    resumen: {
      fontSize: "0.8rem",
    },
    noLink: {
      textDecoration: "none",
    },
  }));

  const classes = useStyles();

  return (
    <Link
      to={`/movie/${movie.id}`}
      className={`${classes.root} ${classes.noLink}`}
    >
      <img
        className={classes.img}
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <Typography className={classes.title} variant='h5'>
        {movie.title}
      </Typography>
    </Link>
  );
};

export default MovieCard;
