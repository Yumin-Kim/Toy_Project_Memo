import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { IuseParam } from "@typings/route";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { ROOTSTATE } from "../../reducers/root";
import {
  getDetailSubTopicInfoAction,
  getDetailTopicInfoAction,
  MappingPrevPathNameAction,
} from "@actions/post";
import Posting from "@components/PostingComponent/Posting";

const DetailInfo = () => {
  const { category, subcategory, id } = useParams<IuseParam>();
  const location = useLocation()
  const dispatch = useDispatch();
  const { detailCateogoryInfo, detailSubCateogoryInfo } = useSelector(
    (state: ROOTSTATE) => state.post
  );
  useEffect(() => {
    console.log(category, subcategory, id, location);
    dispatch(MappingPrevPathNameAction(location.pathname))
    if (subcategory) {
      dispatch(
        getDetailSubTopicInfoAction.ACTION.REQUEST({
          topic: category,
          topicId: Number(id),
          subTopic: subcategory,
        })
      );
    } else {
      dispatch(
        getDetailTopicInfoAction.ACTION.REQUEST({
          topic: category,
          topicId: Number(id),
        })
      );
    }
    //category subcategory , id를 통해서 조회
  }, []);

  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={12}
        style={{
          backgroundColor: "white",
          boxSizing: "border-box",
          padding: "10px",
        }}
      >
        {subcategory ? (
          <>
            {detailSubCateogoryInfo && (
              <>
                {" "}
                <Typography variant="h4" color="initial">
                  카테고리 : {detailSubCateogoryInfo.M_Topics[0].title} >> {detailSubCateogoryInfo.M_SubTopics[0].title}
                </Typography>
                <br />
                <Typography variant="h5" color="initial">
                  포스팅 제목 : {detailSubCateogoryInfo.title}
                </Typography>
                <br />
                <Typography variant="inherit" color="initial">
                  포스팅 작성일 : {detailSubCateogoryInfo.createdAt}
                </Typography>
                <br />
                <br />
                <Posting postingData={detailSubCateogoryInfo?.description} />
              </>
            )}{" "}
          </>
        ) : (
          <>
            {detailCateogoryInfo && (
              <>
                <Typography variant="h3" color="initial">
                  {detailCateogoryInfo?.title}
                  </Typography>
                  <br />
                <Typography variant="h5" color="initial">
                  포스팅 제목 : {detailCateogoryInfo.title}
                </Typography>
                <br />
                <Typography variant="inherit" color="initial">
                  포스팅 작성일 : {detailCateogoryInfo.createdAt}
                </Typography>
                <br />
                <br />
                <Posting postingData={detailCateogoryInfo?.description} />
              </>
            )}
          </>
        )}
      </Grid>
    </>
  );
};

export default DetailInfo;
