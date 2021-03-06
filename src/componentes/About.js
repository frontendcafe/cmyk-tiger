import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const info = [
  {
    username: "Ezequiel",
    image:
      "https://avatars0.githubusercontent.com/u/51804994?s=400&u=089acb84462ed58da2ea3c4e4fab55b89a572134&v=4",
    desc: "",
    github: "https://github.com/EzequielCaste",
    linkedin: "https://www.linkedin.com/in/ezequiel-castellanos-a9ab6b1b8/",
  },
  {
    username: "Juan Martín",
    image:
      "https://avatars1.githubusercontent.com/u/59532138?s=460&u=723204ebc6a06d574e281cadb8ba0331b9cef4c8&v=4",
    desc: "",
    linkedin:
      "https://www.linkedin.com/in/juan-mart%C3%ADn-cechetto-395202102/",
    github: "https://github.com/jmceche",
  },
  {
    username: "Milagros",
    image:
      "https://avatars3.githubusercontent.com/u/58148530?s=400&u=dee5ae2a662869786d58b280287bf9d1cbd41437&v=4",
    desc: "",
    linkedin: "https://www.linkedin.com/in/milagros-liliana-alfonzo/",
    github: "https://github.com/miloalfonzo",
  },
];

let theme = createMuiTheme();
theme.typography.h2 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.4rem",
  },
};
theme.typography.h6 = {
  fontSize: "0.8rem",
  fontWeight: "400",
  "@media (min-width:600px)": {
    fontSize: "0.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};
theme.typography.subtitle1 = {
  fontSize: "0.6rem",
  fontWeight: "400",
  "@media (min-width:600px)": {
    fontSize: "0.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};

const useStyles = makeStyles((theme) => ({
  centerAll: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  marginY: {
    marginBottom: "2rem",
  },
  header: {
    height: "40vh",
    width: "100vw",
    backgroundPosition: "50% 30%",
    backgroundSize: "cover",
    background: "#fb8817",
    backgroundImage:
      "linear-gradient(139deg, #fb8817fa, #ff4b01da, #c12127ba, #6C2E019a), url('https://i.pinimg.com/originals/29/af/1f/29af1fd6d7755840399006c75f74e501.jpg')",
    marginBottom: "3rem",
    marginTop: "-5px",
  },
  headerTitle: {
    width: "70%",
    color: "#FFFFFF",
    textShadow: "2px 2px 2px black",
  },
  avatar: {
    display: "inline-block",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem auto",
    padding: ".8rem",
    backgroundColor: "#f1f1f1",
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={`${classes.header} ${classes.centerAll}`}>
        <Typography variant='h2' className={classes.headerTitle} align='center'>
          Movie Search App
        </Typography>
        <Typography
          variant='h6'
          className={`${classes.headerTitle} ${classes.marginY}`}
          align='center'
        >
          Busca películas a traves de la API de{" "}
          <strong>The Movie Database</strong>
        </Typography>

        <Typography
          variant='subtitle1'
          className={classes.headerTitle}
          align='center'
        >
          Este proyecto forma parte de <strong>CMYK++ </strong> una iniciativa
          de <strong>FrontendCafe</strong> para facilitar el desarrollo de
          proyectos colaborativos. Trabajamos con React, React Router y fue la
          primera vez que usamos Material UI en un proyecto. Ha sido una
          experiencia nueva y aprendimos a trabajar en equipo y coordinar el
          esfuerzo.
        </Typography>
      </div>

      <Container>
        <Typography variant='h4' align='center'>
          Colaboradores
        </Typography>
        <Grid container spacing={3} justify='center'>
          {info.map((user) => (
            <Grid item container md={4} sm={7} key={user.username}>
              <Paper className={classes.paper} elevation={5}>
                <Grid
                  item
                  container
                  direction='column'
                  justify='center'
                  alignItems='center'
                >
                  <Grid item>
                    <img
                      className={classes.avatar}
                      src={user.image}
                      alt={user.username}
                    ></img>
                  </Grid>
                  <Grid item>
                    <Typography variant='h5'>{user.username}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography varian='p' align='justify'>
                      {user.desc}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    direction='row'
                    justify='center'
                    spacing={1}
                  >
                    <Grid item>
                      <a href={user.github} target='_blank' rel='noreferrer'>
                        <Chip label='Github' variant='outlined' clickable />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        href={user.linkedin || ""}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <Chip label='Linkedin' variant='outlined' clickable />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container className={`${classes.paperContainer} ${classes.marginY}`}>
        <Typography variant='h4' align='center' className={classes.marginY}>
          Tecnologías
        </Typography>
        <Grid container spacing={3}>
          <Grid item container justify='center' sm={4}>
            <img src='/logo192.png' alt='react logo' width='160' />
          </Grid>
          <Grid item container justify='center' sm={4}>
            <img
              src='https://material-ui.com/static/logo_raw.svg'
              width='160'
              alt='materialui logo'
            />
          </Grid>
          <Grid item container justify='center' sm={4}>
            <img
              src='https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png'
              width='160'
              alt='sass logo'
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
