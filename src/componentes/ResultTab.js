import React, { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import Button from "@material-ui/core/Button";
const ResultTab = ({ url }) => {
  const [resPage, setResPage] = React.useState(1);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${url}&page=${resPage}`);
      const data = await res.json();

      setResults((result) => [...result, data]);
    };
    fetchData();
  }, [resPage, url]);
  return (
    <>
      {results &&
        results.map((result) => (
          <CardGrid data={result.results} key={result.page} />
        ))}
      <Button
        variant='contained'
        fullWidth
        color='secondary'
        disableElevation
        onClick={() => {
          setResPage((page) => page + 1);
        }}
      >
        Show More
      </Button>
    </>
  );
};

export default ResultTab;
