import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import CardList from "./CardList";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import ResultTab from "./ResultTab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const Home = () => {
  // no soy muy fan de poner la URl en las props
  // habrá una forma de implementarlos de otra manera?
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Container className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='secondary'
        >
          <Tab label='Popular' />
          <Tab label='In Theaters' />
        </Tabs>
      </Container>
      <TabPanel value={value} index={0}>
        <ResultTab
          url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&sort_by=popularity`}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ResultTab
          url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&sort_by=popularity`}
        />
      </TabPanel>
    </Container>
  );
};

export default Home;
