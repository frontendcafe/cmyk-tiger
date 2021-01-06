import React from "react";
import { useFetch } from "../hooks/useFetch";

const TrailerModal = ({ movie }) => {
  const { data: peli } = useFetch(
    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&append_to_response=videos`
  );
  return (
    <>
      {peli && (
        <div>
          <iframe
            title="Movie Trailer"
            width={window.innerWidth - 50}
            height={window.innerHeight - 150}
            src={`https://youtube.com/embed/${peli.videos.results[0].key}?autoplay=1`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      )
      }
    </>
  );
};

export default TrailerModal;
