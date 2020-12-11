import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "23%"
    },
    img: {
      maxHeight: "15rem",
      width: "95%",
      marginTop: "0.5rem;",
      borderRadius: "5px"
    },
    title: {
      color: "#f50057",
      textAlign: "center"
    },
    imgDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    resumen: {
      fontSize: "0.8rem"
    }
  }));

  const classes = useStyles();
  
  return (
    <div>
    <Link to={`/movie/${movie.id}`}>
      <Card className={classes.root}>
          <CardMedia className={classes.imgDiv}>
            <img
              className={classes.img} 
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
          </CardMedia>
          <CardContent>
            <Typography className={classes.title} variant="h5">
              {movie.title}
            </Typography>
            <Typography className={classes.resumen} variant="h6">
              {movie.overview}
            </Typography>
          </CardContent>
        </Card>
    </Link>
      
    </div>
  );
};

export default MovieCard;
