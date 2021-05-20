import { createStyles, makeStyles, Theme } from "@material-ui/core";

const drawerWidth = 200;

export const useStyles = makeStyles((theme: Theme) =>
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
