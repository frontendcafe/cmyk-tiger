import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import ResultTab from "./ResultTab";
import { AltHome } from "./AltHome";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '0'
  },
  tabText: {
    color: 'white'
  }
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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='secondary'
        className={classes.tabText}
      >
        <Tab label='Discovery' />
        <Tab label='In Theaters' />
        <Tab label='Popular' />
      </Tabs>


      <TabPanel value={value} index={0}>
        {/* <ResultTab
          url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&sort_by=popularity`}
        /> */}
        <AltHome />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ResultTab
          url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&sort_by=popularity`}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ResultTab
          url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&sort_by=popularity`}
        />
      </TabPanel>
    </Container>
  );
};

export default Home;
