import React, { useCallback, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import "react-markdown-editor-lite/lib/index.css";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";
import { ROOTSTATE } from "reducers/root";
import { useEffect } from "react";
import { ReturnPostingBoard } from "@typings/Entity";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const ReWriteEditor = () => {
  const [value, setValue] = useState("");
  const [titleSValue, setTitleValue] = useState("");
  const [userUpdateInfo, setUserUpdateInfo] =
    useState<ReturnPostingBoard>(null);
  const mdEditor = useRef(null);
  const { detailCateogoryInfo, detailSubCateogoryInfo } = useSelector(
    (state: ROOTSTATE) => state.post
  );

  useEffect(() => {
    if (detailCateogoryInfo) {
      setUserUpdateInfo({ ...detailCateogoryInfo });
    }
    if (detailSubCateogoryInfo) {
      setUserUpdateInfo({ ...detailSubCateogoryInfo });
    }
  }, [detailCateogoryInfo, detailSubCateogoryInfo]);
  useEffect(() => {
    if (userUpdateInfo) {
      setValue(userUpdateInfo.description);
      setTitleValue(userUpdateInfo.title);
    }
  }, [userUpdateInfo]);
  const handleEditorChange = ({ html, text }: any) => {
    // console.log(newValue.replaceAll("\n", "__"));
    setValue(text);
  };

  const onChangeHeadLine = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if ((e.target as any).value.trim() === "") {
        alert("타이틀을 변경해주세요");
      }
      setTitleValue((e.target as any).value);
    },
    [titleSValue]
  );

  const onClickUpdateDescription = useCallback(() => {
    //비동기요청으로 메모한것들 수정할 수 있게
    console.log(value, titleSValue);
  }, [value, titleSValue]);

  return (
    <>
      {userUpdateInfo && (
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant="h3"
            color="initial"
            style={{ marginBottom: "20px" }}
          >
            제목 : {userUpdateInfo.M_Topics[0].title}
          </Typography>
          <Typography
            variant="h4"
            color="initial"
            style={{ marginBottom: "20px" }}
          >
            수정 해주세요!
          </Typography>
          <TextField
            id="asd"
            label="타이블을 변경해주세요"
            value={userUpdateInfo.title}
            onChange={onChangeHeadLine}
            style={{ marginBottom: "20px" }}
          />
          <Button
            onClick={onClickUpdateDescription}
            variant="contained"
            color="primary"
          >
            수정
          </Button>
          <Editor
            ref={mdEditor}
            value={value}
            style={{
              height: "500px",
            }}
            onChange={handleEditorChange}
            renderHTML={text => <ReactMarkdown children={text} />}
          />
        </Grid>
      )}
    </>
  );
};

export default ReWriteEditor;
