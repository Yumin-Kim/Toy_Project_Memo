import React, { useCallback, FC, useState } from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import BlogLinkItem from "@components/ListComponent/BlogLinkItem";

import { CategoryData } from "@typings/route";

interface IBasicListItem {
  categoryList: CategoryData;
  index: number;
  classes: ClassNameMap<
    | "toolbar"
    | "drawerOpen"
    | "drawerClose"
    | "drawer"
    | "nested"
    | "listItemText"
  >;
}

const BasicListItem: FC<IBasicListItem> = ({
  categoryList: categoryData,
  index,
  classes,
}) => {
  const [toggleList, setToggleList] = useState(true);
  const onClickSideCategory = useCallback(() => {
    setToggleList(prev => !prev);
  }, [toggleList]);

  return (
    <>
      <BlogLinkItem
        to={categoryData.path}
        primary={categoryData.title}
        classes={classes}
        icon={<InboxIcon />}
      />
    </>
  );
};

export default BasicListItem;
