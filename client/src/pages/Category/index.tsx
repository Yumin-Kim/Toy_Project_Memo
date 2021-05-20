import React, { useEffect } from "react";
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

const Category = () => {
  const { category, subcategory } = useParams<IuseParam>();
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
    // category, subcategory 요소를 통해 조회
    //componentDidMount
    //비동기 요청 리덕스 store확인하여 비어 있으면 요청
  }, [sideBarCategoryInfos, category, subcategory]);
  return (
    <>
      {categoryListInfos?.length !== 0 && !subcategory ? (
        <Grid item xs={12} sm={6} md={3}>
          <ImgMediaCard />
        </Grid>
      ) : (
        <Grid item xs={12} sm={6} md={9}>
          준비중입니다
        </Grid>
      )}
      {/* <Grid item xs={12} sm={6} md={3}>
        <ImgMediaCard />
      </Grid> */}
      {/* <Grid item xs={12} sm={6} md={3}>
        <RouterLink to="/linux/detail/1">Linux//1 포스팅글</RouterLink>
        <RouterLink to="/linux/unix">/linux/unix 세부카테고리 조회 </RouterLink>
        <RouterLink to="/linux/detail/unix/2">
          Linux/unix/2 세부카테고리 포스팅 조회{" "}
        </RouterLink>
      </Grid> */}
    </>
  );
};
export default Category;
