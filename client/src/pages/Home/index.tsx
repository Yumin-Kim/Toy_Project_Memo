import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Typography } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import ImgMediaCard from "@components/CardCharView/ImgMediaCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROOTSTATE } from "reducers/root";
import { getAllPostingAction } from "@actions/post";

const Home = () => {
  const { mainPostingInfos } = useSelector((state: ROOTSTATE) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPostingAction.ACTION.REQUEST({ offset: 0, limit: 20 }));
  }, []);

  return (
    <>
      {mainPostingInfos ? (
        mainPostingInfos.map(value => (
          <Grid item xs={12} sm={12} md={4}>
            <ImgMediaCard data={value} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h1" color="initial">
            준비중!
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default Home;
