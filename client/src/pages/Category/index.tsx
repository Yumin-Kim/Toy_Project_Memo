import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "../../components/CardCharView/ImgMediaCard";
import { useParams, Link as RouterLink } from "react-router-dom";
import { IuseParam } from "@typings/route";

const Category = () => {
  const { category, subcategory } = useParams<IuseParam>();
  useEffect(() => {
    // category, subcategory 요소를 통해 조회
    //componentDidMount
    //비동기 요청 리덕스 store확인하여 비어 있으면 요청
  }, []);
  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <ImgMediaCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ImgMediaCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <RouterLink to="/linux/detail/1">Linux//1 포스팅글</RouterLink>
        <RouterLink to="/linux/unix">/linux/unix 세부카테고리 조회 </RouterLink>
        <RouterLink to="/linux/detail/unix/2">
          Linux/unix/2 세부카테고리 포스팅 조회{" "}
        </RouterLink>
      </Grid>
    </>
  );
};
export default Category;
