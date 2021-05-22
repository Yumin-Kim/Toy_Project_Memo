import React, { useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import BasicListItem from "../../components/ListComponent/BasicListItem";
import { useSelector, useDispatch } from "react-redux";
import { ROOTSTATE } from "reducers/root";
import { getTopicListSiderBarAction } from "@actions/post";
import { siderStyles } from "@layouts/BasicUI/style";

export default function NestedList() {
  const classes = siderStyles();
  const theme = useTheme();
  const { sideBarCategoryInfos } = useSelector(
    (state: ROOTSTATE) => state.post
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sideBarCategoryInfos) {
      dispatch(getTopicListSiderBarAction.ACTION.REQUEST());
    }
  }, [sideBarCategoryInfos]);
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
        {sideBarCategoryInfos && sideBarCategoryInfos.length !== 0
          ? sideBarCategoryInfos.map((value, index) => (
              <BasicListItem
                categoryList={value}
                index={index}
                classes={classes}
              />
            ))
          : "준비중입니다"}
      </List>
      <Divider />
    </Drawer>
  );
}
