import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CardMovie = ({ tile }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "23%"
    },
    img: {
      maxHeight: "12rem"
    },
    title: {
      color: "#f50057"
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia>
          {/* <img className={classes.img}

            src={`https://image.tmdb.org/t/p/w500/${tile.poster_path}`}
            alt={tile.title}
          /> */}
        </CardMedia>
        <CardContent>
          {/* <Typography className={classes.title} variant="h3">{tile.title}</Typography> */}
          <Typography variant="h6">Decripción de la pelicula</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardMovie;
