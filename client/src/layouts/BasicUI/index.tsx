import React from "react";
import { Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import loadable from "@loadable/component";
import { BasicUIuseStyles } from "./style";

const Home = loadable(
  () => import(/* webpackChunkName: "Home" */ "@pages/Home")
);
const NestedList = loadable(
  () => import(/* webpackChunkName: "NestedList" */ "@layouts/Sider")
);
const Header = loadable(
  () => import(/* webpackChunkName: "Header" */ "@layouts/Header")
);
const Category = loadable(
  () => import(/* webpackChunkName: "Category" */ "@pages/Category")
);
const DetailInfo = loadable(
  () => import(/* webpackChunkName: "DetailInfo" */ "@pages/DetailInfo")
);
const WriteEditor = loadable(
  () => import(/* webpackChunkName: "WriteEditor" */ "@pages/WriteEditor")
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
          <Grid item xs={12} sm={6} md={9}>
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
              </Switch>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>TodoList</Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
