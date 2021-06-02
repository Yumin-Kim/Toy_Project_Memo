import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "../../components/CardCharView/ImgMediaCard";
import { useParams, Link as RouterLink, Link } from "react-router-dom";
import { IuseParam } from "@typings/route";
import { useSelector, useDispatch } from "react-redux";
import { ROOTSTATE } from "reducers/root";
import {
  getSubTopicInfoAction,
  getTopicPostingInfoAction,
} from "@actions/post";
import Typography from "@material-ui/core/Typography";
import { SelectInfo } from "../../components/UtilComponent/Formcomponent";
import { ReducePostingBoard, ReturnPostingBoard } from "@typings/Entity";
import SelectInputComponent from "@components/UtilComponent/SelectInputComponent";
import { useCallback } from "react";
import { Button } from "@material-ui/core";
import InfiniteScrollCardViewComonent from "@components/CardCharView/InfiniteScrollCardViewComonent";

const Category = () => {
  const { category, subcategory } = useParams<IuseParam>();
  const [postingBoard, setPosingBoard] =
    useState<ReducePostingBoard[] | null>(null);
  const [selectSubCategory, setSelectSubCategory] =
    useState<SelectInfo[] | null>(null);
  const [changePostingBoard, setChangePostingBoard] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [offsetConut, setOffsetCount] = useState(20);
  const { categoryListInfos, subCategoryListInfos, sideBarCategoryInfos } =
    useSelector((state: ROOTSTATE) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = sideBarCategoryInfos?.find(
      value => value.pathname === "/" + category
    );
    setChangePostingBoard(false);
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
              limit: offsetConut,
              topic: data.title,
            })
          );
        }
      }
    }
  }, [sideBarCategoryInfos, category, subcategory]);

  useEffect(() => {
    if (categoryListInfos?.length !== 0) {
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
      if (parseData) {
        setPosingBoard(parseData);
      }
      if (selectInfos.length !== 0) {
        setSelectSubCategory(selectInfos);
      }
      if (selectInfos.length === 0) {
        setSelectSubCategory(null);
      }
    } else {
      setPosingBoard(null);
      setSelectSubCategory(null);
    }
  }, [categoryListInfos, subCategoryListInfos]);

  const onChageSelectBox = useCallback(
    (e: React.ChangeEvent) => {
      if (sideBarCategoryInfos) {
        let data;
        if (postingBoard) {
          data = sideBarCategoryInfos.find(
            x => x.title === postingBoard[0].Maintitle
          );
        }
        if (data) {
          setChangePostingBoard(true);
          setSelectValue((e.target as any).value);
          dispatch(
            getSubTopicInfoAction.ACTION.REQUEST({
              subTopic: (e.target as any).value,
              topic: String(data.id),
            })
          );
          (e.target as any).value = "";
        }
      }
    },
    [changePostingBoard, postingBoard]
  );

  const onClickChangePostingBoard = useCallback(() => {
    console.log("onClickChangePostingBoard");
    if (selectSubCategory) {
      const data = [...selectSubCategory];
      console.log(data === selectSubCategory);
      setSelectSubCategory(data);
    }
    setChangePostingBoard(false);
  }, [selectSubCategory]);

  const onNextLoadScrollFunc = useCallback(() => {
    const matchtoPathName = sideBarCategoryInfos?.find(
      value => value.pathname === "/" + category
    );
    if (matchtoPathName) {
      dispatch(
        getTopicPostingInfoAction.ACTION.REQUEST({
          limit: offsetConut,
          offset: offsetConut + 20,
          topic: matchtoPathName.title,
        })
      );
      setOffsetCount(offsetConut + 20);
    }
  }, [category]);

  return (
    <>
      {postingBoard && postingBoard?.length !== 0 ? (
        <>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h3" color="initial">
              {postingBoard[0].Maintitle}
              <Typography variant="h4" color="initial">
                {selectSubCategory && (
                  <SelectInputComponent
                    selectCategoryValid={true}
                    selectInfo={selectSubCategory}
                    changeValid={setChangePostingBoard}
                    onChangeText={onChageSelectBox}
                  />
                )}
              </Typography>
            </Typography>
            <Typography variant="h3" color="initial">
              {changePostingBoard && (
                <Button variant="outlined" color="default">
                  <Link
                    component={RouterLink}
                    to={`/${category}`}
                    style={{ color: "black" }}
                    onClick={onClickChangePostingBoard}
                  >
                    {postingBoard[0].Maintitle} 돌아가기
                  </Link>
                </Button>
              )}
            </Typography>
          </Grid>
          {changePostingBoard ? (
            <>
              {subCategoryListInfos?.map((value, index) => (
                <Grid item xs={12} sm={6} md={4}>
                  <ImgMediaCard data={value} key={value.M_Topics.length * 2} />
                </Grid>
              ))}
            </>
          ) : (
            <>
              {/* {categoryListInfos?.map((value, index) => (
                <Grid item xs={12} sm={6} md={4}>
                  <ImgMediaCard data={value} key={value.M_Topics.length * 2} />
                </Grid>
              ))} */}
              {categoryListInfos && categoryListInfos.length !== 0 && (
                <InfiniteScrollCardViewComonent
                  scrollLoadData={categoryListInfos}
                  onNextDispatchFunc={onNextLoadScrollFunc}
                />
              )}
            </>
          )}
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
