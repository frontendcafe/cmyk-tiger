import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import no_image from "../assets/no_image.png";

const MovieCard = ({ movie }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    img: {
      width: '100%',
      // maxWidth: "220px",
      // maxHeight: "330px",
      borderRadius: "10px",
    },
    title: {
      fontSize: '16px',
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
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`
            : no_image
        }
        alt={movie.title}
      />
      <Typography className={classes.title} variant='h5'>
        {movie.title}
      </Typography>
    </Link>
  );
};

export default MovieCard;
