import { makeStyles } from "@material-ui/core";
import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Spinner } from "./Spinner";

const useStyles = makeStyles((theme) => ({
  noTrailer: {
    width: 250,
    height: 250,
    backgroundColor:'black',
    color: 'white',
    display: 'grid',
    placeItems: 'center'
  }
})
)

const TrailerModal = ({ movie }) => {
  const classes = useStyles();
  const { data: peli, loading } = useFetch(
    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&append_to_response=videos`
  );

  if(loading) {
    return <Spinner />
  } else if( peli.videos.results.length === 0 ){
    return <h1 className={classes.noTrailer}>No Trailer</h1>  
  } else {    
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
      }
  
};

export default TrailerModal;
