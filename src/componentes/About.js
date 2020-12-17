import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const info = [
  {
    username: "username",
    image:
      "https://images.pexels.com/photos/951007/pexels-photo-951007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit numquam adipisci, enim sequi asperiores soluta doloremque. Ad reiciendis ab recusandae dolorum atque?",
  },
  {
    username: "username",
    image:
      "https://images.pexels.com/photos/951007/pexels-photo-951007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit numquam adipisci, enim sequi asperiores soluta doloremque. Ad reiciendis ab recusandae dolorum atque?",
  },
  {
    username: "username",
    image:
      "https://images.pexels.com/photos/951007/pexels-photo-951007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit numquam adipisci, enim sequi asperiores soluta doloremque. Ad reiciendis ab recusandae dolorum atque?",
  },
];

const useStyles = makeStyles((theme) => ({
  root: { marginTop: "-3rem" },
  headerBg: {
    height: "40vh",
    width: "100vw",
    objectFit: "cover",
    objectPosition: "50% 30%",
  },
  avatar: {
    display: "inline-block",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  headerTitle: {
    color: "#000000",
  },
  relative: {
    position: "relative",
  },
  paperContainer: {
    position: "absolute",
    top: "85%",
    left: "15%",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,255,255, 0.7)",
    marginBottom: "2rem",
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.relative} ${classes.root}`}>
      <img
        src='https://images.pexels.com/photos/951007/pexels-photo-951007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        className={classes.headerBg}
      />
      <Container className={classes.paperContainer}>
        <Paper className={classes.paper}>
          <h1 className={classes.headerTitle}>Acerca De Este Proyecto</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            nesciunt, quas assumenda illum ipsam impedit molestiae vero neque
            nihil necessitatibus repellendus aliquam aspernatur ut error totam
            provident inventore distinctio autem. Facilis vero illum consectetur
            dolorem, corporis doloribus, voluptate, iste est quod qui excepturi.
            Vero dignissimos numquam illo labore reprehenderit iusto modi quis
            at molestias nulla distinctio nisi eius beatae nemo, aliquam, culpa
            animi, iste illum necessitatibus a dolorum officia? Incidunt porro
            dicta obcaecati dolore distinctio nulla, nemo quam ipsum iusto.
            Soluta quidem vel tempore. Omnis harum atque sunt praesentium
            similique vel quas ab tenetur sint distinctio numquam eum, eaque
            quisquam!
          </p>
        </Paper>
        <Grid container spacing={3}>
          {info.map((user) => (
            <Grid item container xs={4}>
              <Paper>
                <Grid
                  item
                  container
                  direction='column'
                  justify='center'
                  alignItems='center'
                >
                  <Grid item>
                    <img className={classes.avatar} src={user.image}></img>
                  </Grid>
                  <Grid item>
                    <h3>{user.username}</h3>
                  </Grid>
                  <Grid item>
                    <p>{user.desc}</p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
