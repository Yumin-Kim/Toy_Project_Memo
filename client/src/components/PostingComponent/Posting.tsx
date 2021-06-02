import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import gfm from "remark-gfm";

interface PostingProps {
  postingData: string;
}

const Posting: FC<PostingProps> = ({ postingData }) => {
  return (
    <>
      <Button variant="contained" color="primary">
        <Link component={RouterLink} to="/rewrite" style={{ color: "white" }}>
          수정
        </Link>
      </Button>
      <Button
        style={{ marginLeft: "10px" }}
        variant="contained"
        color="primary"
      >
        삭제
      </Button>
      <ReactMarkdown
        children={postingData}
        remarkPlugins={[[gfm, { singleTilde: false }]]}
      />
    </>
  );
};

export default Posting;
