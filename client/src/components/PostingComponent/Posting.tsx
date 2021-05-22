import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";
import { ReturnPostingBoard } from "@typings/Entity";

interface PostingProps {
  postingData: string;
}

const Posting: FC<PostingProps> = ({ postingData }) => {
  return (
    <>
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
      <ReactMarkdown children={postingData} />
    </>
  );
};

export default Posting;
