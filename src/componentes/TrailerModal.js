import React, { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const TrailerModal = ({ movie }) => {
  const { data: peli, loading } = useFetch(
    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&append_to_response=videos`
  );
  const classes = useStyles();
  return (
    <>
      {peli && (
        <div>
          <iframe
            width='560'
            height='315'
            src={`https://youtube.com/embed/${peli.videos.results[0].key}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default TrailerModal;
