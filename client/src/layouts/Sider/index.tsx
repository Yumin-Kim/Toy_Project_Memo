import React, { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme,
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import BasicListItem from "../../components/ListComponent/BasicListItem";
import { CategoryData } from "@typings/route";
const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 240,
      fontSize: "10px",
    },
    toolbar: theme.mixins.toolbar,
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    listItemText: {
      fontSize: "0.3rem",
    },
  })
);

const dummyData: CategoryData[] = [
  { title: "리눅스", count: 12, path: "/linux" },
  { title: "리눅스", count: 12, path: "/linux" },
  { title: "리눅스", count: 12, path: "/linux" },
];

export default function NestedList() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer)}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: true,
          [classes.drawerClose]: !true,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List className={classes.root}>
        {dummyData.map((value, index) => (
          <BasicListItem categoryList={value} index={index} classes={classes} />
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
