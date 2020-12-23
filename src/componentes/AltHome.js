import { Chip, Container, Divider, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import genres from '../pelis/genres';
import CardGrid from './CardGrid';
import { useRandom } from '../hooks/useRandom';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    marginTop: 50,
    height: '70vh'
  },
  chip: {
    marginLeft: '5px'
  }
}));

export const AltHome = () => {
  const { rng } = useRandom(genres.size);

  const [genreId, setKeywordId] = useState(Array.from(genres));
  const [data, setData] = useState('');


  const classes = useStyles();

  async function handleClick(id) {
    setKeywordId(id)

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=10&with_genres=${id}`

    const resp = await fetch(url);
    const data = await resp.json();

    setData(data)

  }

  return (
    <Container className={classes.cardContainer}>
      <div>
        <h3>Movie Recommendations</h3>
        {
          Array.from(genres).map(key => (
            <Chip
              key={key.name}
              onClick={() => handleClick(key.id)}
              className={classes.chip}
              size='medium'
              variant='default'
              color='primary'
              label={`${key.name}`} />
          ))
        }
      </div>
      <Divider />

      {
        data && <CardGrid data={(data.results.sort(function () { return 0.5 - Math.random() }).splice(0, 16))} />
      }




    </Container>
  )
}
