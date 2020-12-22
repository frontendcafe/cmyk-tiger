import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/styles";

const info = [
  {
    username: "Eze",
    image: "https://i.imgur.com/ZOKp8LH.jpg",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit numquam adipisci, enim sequi asperiores soluta doloremque. Ad reiciendis ab recusandae dolorum atque?",
  },
  {
    username: "Frunobulax",
    image: "https://i.imgur.com/ZOKp8LH.jpg",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit numquam adipisci, enim sequi asperiores soluta doloremque. Ad reiciendis ab recusandae dolorum atque?",
  },
  {
    username: "Milo",
    image: "https://i.imgur.com/ZOKp8LH.jpg",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit numquam adipisci, enim sequi asperiores soluta doloremque. Ad reiciendis ab recusandae dolorum atque?",
  },
];

const useStyles = makeStyles((theme) => ({
  root: { marginTop: "-3rem" },
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
    background:
      "url('https://i.pinimg.com/originals/29/af/1f/29af1fd6d7755840399006c75f74e501.jpg')",
    marginBottom: "3rem",
  },
  headerTitle: {
    color: "#FFFFFF",
    textShadow: "2px 2px 2px black",
    //color: "#000",
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
    backgroundColor: "#fafafa",
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.header} ${classes.centerAll}`}>
        <Typography variant='h2' className={classes.headerTitle} align='center'>
          Movie Search App
        </Typography>
        <Typography
          variant='h6'
          className={`${classes.headerTitle} ${classes.marginY}`}
          align='center'
        >
          Busca peliculas a traves de la API de{" "}
          <strong>The Movie Database</strong>
        </Typography>
        <Typography
          variant='subtitle1'
          className={classes.headerTitle}
          align='center'
        >
          Este proyecto forma parte de <strong>CMYK++ </strong> una iniciativa
          de <strong>FrontendCafe</strong> para facilitar el desarrollo de
          proyectos colaborativos
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
                      <a
                        href='https://github.com'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <Chip label='Github' variant='outlined' clickable />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        href='https://linkedin.com'
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
    </div>
  );
};