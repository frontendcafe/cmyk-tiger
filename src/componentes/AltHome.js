import { Chip, Container, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import genres from '../pelis/genres';
import CardGrid from './CardGrid';
import { useRandom } from '../hooks/useRandom';
import TransitionsModal from './TransitionsModal';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  chipContainer: {
    marginBottom: 10,
  },
  chip: {
    transition: 'all 0.3s ease',
    background: 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #6C2E01)',
    '&:hover': {
      filter: 'drop-shadow(1px 2px 3px #6C2E01);'
    },
    marginLeft: '5px',
    marginBottom: '10px'
  }
}));

export const AltHome = () => {
  const { rng } = useRandom(genres.size);
  const genreId = Array.from(genres)[rng].id;
  const [data, setData] = useState("");

  async function getMovie(id) {

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=10&with_genres=${id}`;

    const resp = await fetch(url);
    const data = await resp.json();

    setData(data);
  }

  useEffect(() => {
    getMovie(genreId);
  }, []);

  const classes = useStyles();

  function handleClick(id) {
    getMovie(id);
  }

  return (
    <Container className={classes.cardContainer}>
      <TransitionsModal />
      <div className={classes.chipContainer}>
        {
          Array.from(genres).map(key => (
            <Chip
              key={key.name}
              onClick={() => handleClick(key.id)}
              className={classes.chip}
              size='medium'
              color='primary'
              label={`${key.name}`} />
          ))
        }
      </div>

      {
        data && <CardGrid data={(data.results.sort(function () { return 0.5 - Math.random() }).splice(0, 8))} />
      }

    </Container>
  );
};
