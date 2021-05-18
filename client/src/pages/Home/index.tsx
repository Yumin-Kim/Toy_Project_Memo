import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import ImgMediaCard from "@components/CardCharView/ImgMediaCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1),
    },
  })
);

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <ImgMediaCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>포스팅</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>포스팅</Paper>
      </Grid>
    </>
  );
};

export default Home;
