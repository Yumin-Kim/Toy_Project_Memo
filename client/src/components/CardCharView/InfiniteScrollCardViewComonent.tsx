import React, { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "@components/CardCharView/ImgMediaCard";
import { ReturnPostingBoard } from "@typings/Entity";

interface InfiniteScrollCardViewComponentProps {
  scrollLoadData: ReturnPostingBoard[] | null;
  onNextDispatchFunc: () => void;
}

const InfiniteScrollCardViewComonent: FC<InfiniteScrollCardViewComponentProps> =
  ({ scrollLoadData, onNextDispatchFunc }) => {
    if (scrollLoadData && scrollLoadData.length != 0) {
      return (
        <>
          <InfiniteScroll
            dataLength={scrollLoadData.length}
            next={onNextDispatchFunc}
            hasMore={true}
            style={{ overflow: "none" }}
            loader={<h4>Loading...</h4>}
          >
            <Grid container spacing={1}>
              {scrollLoadData.map(value => (
                <Grid item xs={12} sm={12} md={4}>
                  <ImgMediaCard data={value} />
                </Grid>
              ))}{" "}
            </Grid>
          </InfiniteScroll>
        </>
      );
    } else {
      return null;
    }
  };

export default InfiniteScrollCardViewComonent;
