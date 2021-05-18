import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { IuseParam } from "@typings/route";
import ReactMarkdown from "react-markdown";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const DetailInfo = () => {
  const { category, subcategory, id } = useParams<IuseParam>();
  useEffect(() => {
    //category subcategory , id를 통해서 조회
  }, []);

  return (
    <>
      <Grid item xs={12} sm={6} md={9}>
        {subcategory ? (
          <>
            <Typography variant="h3" color="initial">
              대카테고리
            </Typography>
            <Typography variant="h5" color="initial">
              소카테고리
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h3" color="initial">
              대카테고리
            </Typography>
          </>
        )}
        <Button variant="contained" color="primary">
          수정
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="primary"
        >
          삭제
        </Button>
        <ReactMarkdown children={"# Hello"} />
      </Grid>
    </>
  );
};

export default DetailInfo;
