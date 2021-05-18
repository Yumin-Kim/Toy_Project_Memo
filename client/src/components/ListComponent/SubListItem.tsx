import React, { FC, useEffect, useCallback } from "react";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StarBorder from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";
import { ListItemText } from "@material-ui/core";
import { ICategorySubInnerItem, ICategorySubItem } from "../../pages/route";
import { useState } from "react";

interface SubListItemProps {
  toggleState: boolean;
  toggleSet: React.Dispatch<React.SetStateAction<boolean>>;
  subCategorySubList: ICategorySubItem | ICategorySubInnerItem;
  classes: ClassNameMap<
    "toolbar" | "drawerOpen" | "drawerClose" | "drawer" | "nested"
  >;
  listOpen: boolean;
}

const SubListItem: FC<SubListItemProps> = ({
  subCategorySubList,
  toggleState,
  classes,
  toggleSet,
  listOpen,
}) => {
  const [subToggle, setSubToggle] = useState(true);
  const onClickSideCategory = useCallback(() => {
    setSubToggle(prev => !prev);
  }, [subToggle]);

  useEffect(() => {
    if (!toggleState) {
      toggleSet(true);
    }
  }, [listOpen]);

  if ("title" in subCategorySubList) {
    return (
      <>
        <Collapse in={!toggleState} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              {"title" in subCategorySubList && (
                <Link to={subCategorySubList.path}>
                  <ListItemText primary={subCategorySubList.title} />
                </Link>
              )}
            </ListItem>
          </List>
        </Collapse>
      </>
    );
  } else {
    return (
      <>
        <Collapse in={!toggleState} timeout="auto" unmountOnExit>
          <ListItem
            button
            onClick={onClickSideCategory}
            className={classes.nested}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={subCategorySubList.categoryTitle} />
          </ListItem>
          {subCategorySubList.subInnerItems.map((value, index) => {
            return (
              <SubListItem
                key={index}
                subCategorySubList={value}
                toggleState={subToggle}
                toggleSet={setSubToggle}
                classes={classes}
                listOpen={listOpen}
              />
            );
          })}
        </Collapse>
      </>
    );
    // subCategorySubList.subInnerItems.map(value => {
    //   console.log(value);

    //   return (
    //     <ListItem button className={classes.nested}>
    //       <ListItemIcon>
    //         <StarBorder />
    //       </ListItemIcon>
    //     </ListItem>
    //   );
    // })
  }
};

export default SubListItem;
