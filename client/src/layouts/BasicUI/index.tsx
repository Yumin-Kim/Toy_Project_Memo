import React from "react";
import {
  createStyles,
  Theme,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";

import { useState } from "react";
import NestedList from "../Sider/index";
import { Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import loadable from "@loadable/component";
import { BasicUIuseStyles } from "./style";
import Header from "@layouts/Header";

const Home = loadable(
  () => import(/* webpackchunkFilename : Home */ "@pages/Home")
);
const NotFound = loadable(
  () => import(/* webpackchunkFilename : NotFound */ "@pages/NotFound")
);
const Category = loadable(
  () => import(/* webpackchunkFilename : Category */ "@pages/Category")
);
const DetailInfo = loadable(
  () => import(/* webpackchunkFilename : DetailInfo */ "@pages/DetailInfo")
);
const WriteEditor = loadable(
  () => import(/* webpackchunkFilename : WriteEditor */ "@pages/WriteEditor")
);

//clsx 반응형 웹시 class 변경용이
export default function PermanentDrawerLeft() {
  const classes = BasicUIuseStyles();

  return (
    <div className={classes.root}>
      <Header />
      <NestedList />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={1}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/write" component={WriteEditor} />
            <Route
              path="/:category/detail/:subcategory/:id"
              component={DetailInfo}
            />
            <Route path="/:category/detail/:id" component={DetailInfo} />
            <Route path="/:category/:subcategory" component={Category} />
            <Route path="/:category" component={Category} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>TodoList</Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
