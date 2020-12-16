import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "./Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  imgRound: {
    height: 250,
    borderRadius: "15px",
    opacity: 0.85,
    transition: 'opacity 0.2s linear',
    '&:hover': {
      opacity: 1
    },
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
  }
}));

const CardList = ({ title, url }) => {
  const classes = useStyles();

  const { data, loading, error } = useFetch(url);

  if (data && (data.length === 0)) {
    return (
      <Container className={classes.cardContainer}>
        <h3>No results, try again.</h3>
      </Container>
    )
  } else {
    return (
      <Container>
        <h3>{title}</h3>

        {loading ? (
          <Spinner />
        ) : (
            <>
              <div className={classes.root}>
                <GridList className={classes.gridList} cols={3.5} cellHeight='auto'>
                  {data.map((movie) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        alt={movie.title}
                        className={classes.imgRound}
                      />
                      <Typography
                        variant='h6'
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        {movie.title}
                      </Typography>
                    </Link>
                  ))}
                </GridList>
              </div>
            </>
          )}
      </Container>
    );
  }





};

export default CardList;
