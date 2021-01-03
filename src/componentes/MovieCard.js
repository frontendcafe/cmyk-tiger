import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import no_image from "../assets/no_image.png";

import TrailerModal from "./TrailerModal";
import Fab from "@material-ui/core/Fab";
import Modal from "@material-ui/core/Modal";
import PlayIcon from "@material-ui/icons/PlayArrow";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: "100%",
    // maxWidth: "220px",
    // maxHeight: "330px",
    borderRadius: "10px",
  },
  title: {
    fontSize: "16px",
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
  relative: {
    position: "relative",
  },
  floating: {
    position: "absolute",
    top: "50%",
    left: "50%",
    background: "rgba(0,0,0,0.6)",
    color: "orange",
    minHeight: 0,
    minWidth: 0,
    padding: '1rem',
    // fontSize: "clamp(.4rem, 1vw, 2rem)",
    transform: 'translate(-50%, -50%)',

    "&:hover": {
      background: "rgba(0,0,0,0.8)",
    },
    "&:hover p": {
      transition: "all .3s linear",
      width: "100%",
    },
  },
  paper: {
    position: "absolute",
  },
  btnTitle: {
    margin: 0,
    width: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
}));

const MovieCard = ({ movie }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.relative}>
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
        <Button
          className={classes.floating}
          onClick={() => {
            handleOpen();
          }}
        >
          <PlayIcon />
          <p className={classes.btnTitle}>Watch Trailer</p>
        </Button>
      </div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
      >
        <div style={modalStyle} className={classes.paper}>
          <TrailerModal movie={movie} />
        </div>
      </Modal>
    </>
  );
};

export default MovieCard;
