import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

  const [state, setState] = useState({ data: null, loading: true, error: null });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    setState({ loading: true, data: null, error: null })
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data: data
          })
        } else {
          console.log("setstate no se llama")
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info'
        })

      })
  }, [url]);

  return state;
}