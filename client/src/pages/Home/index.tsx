import React, { FC, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Typography } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import ImgMediaCard from "@components/CardCharView/ImgMediaCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ROOTSTATE } from "reducers/root";
import { getAllPostingAction, ResetAllPosingAction } from "@actions/post";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReturnPostingBoard } from "@typings/Entity";

const Home = () => {
  const { mainPostingInfos } = useSelector((state: ROOTSTATE) => state.post);
  const [items, setItems] = useState<any[]>(Array.from({ length: 20 }));
  const [offsetCount, settOffestCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ResetAllPosingAction());
    dispatch(getAllPostingAction.ACTION.REQUEST({ offset: 0, limit: 20 }));
  }, []);
  const fetchMoreData = () => {
    // settOffestCount(offsetCount + 1);
    dispatch(
      getAllPostingAction.ACTION.REQUEST({
        offset: offsetCount,
        limit: offsetCount + 20,
      })
    );
    settOffestCount(offsetCount + 20);
  };

  return (
    <>
      {mainPostingInfos && mainPostingInfos.length !== 0 ? (
        <InfiniteScroll
          dataLength={mainPostingInfos.length}
          next={fetchMoreData}
          hasMore={true}
          style={{ overflow: "none" }}
          loader={<h4>Loading...</h4>}
        >
          <Grid container spacing={1}>
            {mainPostingInfos.map(value => (
              <Grid item xs={12} sm={12} md={4}>
                <ImgMediaCard data={value} />
              </Grid>
            ))}{" "}
          </Grid>
        </InfiniteScroll>
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
