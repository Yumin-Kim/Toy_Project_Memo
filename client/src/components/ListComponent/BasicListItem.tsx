import React, { useCallback, FC, useState } from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import BlogLinkItem from "@components/ListComponent/BlogLinkItem";

import { TopicListSiderBarInfo } from "@typings/Entity";

interface IBasicListItem {
  categoryList: TopicListSiderBarInfo;
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
        to={categoryData.pathname}
        primary={`${categoryData.title} (${
          !categoryData.count ? 0 : categoryData.count
        })`}
        classes={classes}
        icon={<InboxIcon />}
      />
    </>
  );
};

export default BasicListItem;
