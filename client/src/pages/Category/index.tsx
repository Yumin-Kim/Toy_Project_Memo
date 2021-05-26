import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "../../components/CardCharView/ImgMediaCard";
import { useParams, Link as RouterLink } from "react-router-dom";
import { IuseParam } from "@typings/route";
import { useSelector, useDispatch } from "react-redux";
import { ROOTSTATE } from "reducers/root";
import {
  getSubTopicInfoAction,
  getTopicPostingInfoAction,
} from "@actions/post";
import Typography from "@material-ui/core/Typography";
import { SelectInfo } from "../../components/UtilComponent/Formcomponent";
import {
  PostingBoardInfo,
  ReducePostingBoard,
  ReturnPostingBoard,
} from "@typings/Entity";
import SelectInputComponent from "@components/UtilComponent/SelectInputComponent";
import { useCallback } from "react";

const Category = () => {
  const { category, subcategory } = useParams<IuseParam>();
  const [postingBoard, setPosingBoard] =
    useState<ReducePostingBoard[] | null>(null);
  const [selectSubCategory, setSelectSubCategory] =
    useState<SelectInfo[] | null>(null);
  const { categoryListInfos, subCategoryListInfos, sideBarCategoryInfos } =
    useSelector((state: ROOTSTATE) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = sideBarCategoryInfos?.find(
      value => value.pathname === "/" + category
    );
    if (data) {
      if (category) {
        if (subcategory) {
          dispatch(
            getSubTopicInfoAction.ACTION.REQUEST({
              subTopic: subcategory,
              topic: data.title,
            })
          );
        } else {
          dispatch(
            getTopicPostingInfoAction.ACTION.REQUEST({
              offset: 0,
              limit: 20,
              topic: data.title,
            })
          );
        }
      }
    }
  }, [sideBarCategoryInfos, category, subcategory]);

  useEffect(() => {
    if (categoryListInfos?.length !== 0) {
      console.log("useEffect categoryListInfos?.length !== 0");
      const HashSubTitle = new Set();
      const HashSubID = new Set();
      const parseData = categoryListInfos?.reduce((prev, cur, index) => {
        const customObj = {} as ReducePostingBoard;
        (Object.keys(cur) as (keyof ReturnPostingBoard)[]).map(value => {
          if (value !== "M_Topics") {
            if (value !== "M_SubTopics") {
              if (cur[value] !== "null") {
                customObj[value] = cur[value];
              }
            }
            if (cur.M_SubTopics.length !== 0) {
              customObj.subTitle = cur["M_SubTopics"][0].title;
              HashSubTitle.add(cur["M_SubTopics"][0].title);
              HashSubID.add(cur["M_SubTopics"][0].id);
            }
          } else {
            customObj.Maintitle = cur["M_Topics"][0].title;
          }
        });
        prev.push(customObj);
        return prev;
      }, [] as ReducePostingBoard[]);
      const selectInfos = (Array.from(HashSubID) as string[]).reduce(
        (prev, cur, index) => {
          const selectInfo = {} as SelectInfo;
          selectInfo.value = cur;
          selectInfo.label = (Array.from(HashSubTitle) as string[])[index];
          prev.push(selectInfo);
          return prev;
        },
        [] as SelectInfo[]
      );
      console.log("HashSubTitle", selectInfos);
      if (parseData) {
        setPosingBoard(parseData);
      }
      if (selectInfos) {
        setSelectSubCategory(selectInfos);
      }
    } else {
      setPosingBoard(null);
      selectSubCategory(null);
    }
  }, [categoryListInfos]);

  const onChageSelectBox = useCallback((e: React.ChangeEvent) => {
    console.log((e.target as any).value);
  }, []);

  return (
    <>
      {postingBoard && postingBoard?.length !== 0 ? (
        <>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h3" color="initial">
              {postingBoard[0].Maintitle}
              {selectSubCategory && (
                <SelectInputComponent
                  selectInfo={selectSubCategory}
                  onChangeText={onChageSelectBox}
                />
              )}
              <br />
            </Typography>
            <br />
          </Grid>
          {categoryListInfos?.map((value, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <ImgMediaCard data={value} key={value.M_Topics.length * 2} />
            </Grid>
          ))}
        </>
      ) : (
        <Grid item xs={12} sm={6} md={9}>
          준비중입니다
        </Grid>
      )}
    </>
  );
};
export default Category;
