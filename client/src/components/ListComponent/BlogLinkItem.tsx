import { ListItemProps, ListItemText } from "@material-ui/core";
import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
interface BlogLinnkItemProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  classes: ClassNameMap<
    | "toolbar"
    | "drawerOpen"
    | "drawerClose"
    | "drawer"
    | "nested"
    | "listItemText"
  >;
}

function BlogLinkItem(props: BlogLinnkItemProps) {
  const { icon, primary, to, classes } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary={primary}
        />
      </ListItem>
    </li>
  );
}

export default BlogLinkItem;
