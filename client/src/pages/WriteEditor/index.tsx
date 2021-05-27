import React, { useRef, useState } from "react";
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import SelectInputComponent from "../../components/UtilComponent/SelectInputComponent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { TextField, Button, ButtonGroup } from "@material-ui/core";
import { useEffect } from "react";
import "react-markdown-editor-lite/lib/index.css";
import { SelectInfo } from "@components/UtilComponent/Formcomponent";
import { useDispatch, useSelector } from "react-redux";
import { ROOTSTATE } from "reducers/root";
import {
  getSubTopicListAction,
  getTopicListSiderBarAction,
  resetWritePostingAction,
} from "@actions/post";
import { useInput } from "@hooks/useInput";
import { useCallback } from "react";
import { writePostingInfoAction } from "../../actions/post/index";
import { Redirect } from "react-router-dom";

const WriteEditor = () => {
  const mdEditor = useRef(null);
  const [value, setValue] = useState<string>("");
  const [redirectValid, setRedirectValid] = useState(false);
  const [subCategory, setSubCategory] = useState<string>("");
  const [selectInfo, setSelectInfo] = useState<SelectInfo[]>([]);
  const [selectInfoList, setSelectInfoList] = useState<SelectInfo[]>([]);
  const [selectCateogoryName, setSelectCateogoryName] = useState("");
  const [headline, onChangeHeadLine] = useInput("");
  const {
    sideBarCategoryInfos,
    selectSubCategoryListInfos,
    writePosingMessage,
  } = useSelector((state: ROOTSTATE) => state.post);
  const dispatch = useDispatch();
  const handleEditorChange = ({ html, text }: any) => {
    // console.log(newValue.replaceAll("\n", "__"));
    setValue(text);
  };
  //서버 전송후 replaceAll할지 안할지 결정

  useEffect(() => {
    if (selectSubCategoryListInfos) {
      if (selectSubCategoryListInfos?.length !== 0) {
        setSelectInfoList([
          ...selectSubCategoryListInfos.reduce((prev, cur, index) => {
            const obj = {} as SelectInfo;
            obj.value = String(cur.id);
            obj.label = cur.title;
            prev.push(obj);
            return prev;
          }, [] as SelectInfo[]),
        ]);
      } else {
        setSubCategory("");
      }
    } else {
      setSubCategory("");
    }
  }, [selectSubCategoryListInfos]);

  useEffect(() => {
    if (!sideBarCategoryInfos) {
      dispatch(getTopicListSiderBarAction.ACTION.REQUEST());
    } else {
      setSelectInfo([
        ...sideBarCategoryInfos.reduce((prev, cur, index) => {
          const obj = {} as SelectInfo;
          obj.value = String(cur.id);
          obj.label = cur.title;
          prev.push(obj);
          return prev;
        }, [] as SelectInfo[]),
      ]);
    }
  }, [sideBarCategoryInfos]);

  const onClickSubmit = useCallback(() => {
    const createdAt = new Date().toISOString().match(/[^T]*/g);
    if (createdAt) {
      if (String(value).trim() !== "") {
        if (selectCateogoryName) {
          if (headline) {
            if (subCategory) {
              dispatch(
                writePostingInfoAction.ACTION.REQUEST({
                  title: String(headline),
                  description: value,
                  createdAt: String(createdAt[0]),
                  topicId: Number(selectCateogoryName),
                  subTopicId: Number(subCategory),
                })
              );
            } else {
              dispatch(
                writePostingInfoAction.ACTION.REQUEST({
                  title: String(headline),
                  description: value,
                  createdAt: String(createdAt[0]),
                  topicId: Number(selectCateogoryName),
                })
              );
            }
          } else {
            alert("타이틀을 적어주세요");
          }
        } else {
          alert("카테고리 선정해주세요");
        }
      } else {
        alert("내용을 입력해주세요");
      }
    }
  }, [subCategory, value, selectCateogoryName, headline]);

  const onChangeSelectBox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // console.log();
      setSelectCateogoryName((e.target as any).value);
      dispatch(
        getSubTopicListAction.ACTION.REQUEST(Number((e.target as any).value))
      );
    },
    []
  );

  const onChangeSubSelect = useCallback(e => {
    setSubCategory(e.target.value);
  }, []);

  useEffect(() => {
    if (writePosingMessage === "sucess") {
      dispatch(resetWritePostingAction());
      alert("등록 완료");
      setRedirectValid(true);
    }
    if (writePosingMessage === "idle...") {
      dispatch(getTopicListSiderBarAction.ACTION.REQUEST());
    }
    if (writePosingMessage === "Failure") alert("등록 실패했습니다");
  }, [writePosingMessage]);

  return (
    <>
      {!redirectValid ? (
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h3" color="inherit">
            <SelectInputComponent
              onChangeText={onChangeSelectBox}
              selectInfo={selectInfo}
            />
          </Typography>
          {selectSubCategoryListInfos &&
            selectSubCategoryListInfos.length !== 0 && (
              <>
                <SelectInputComponent
                  onChangeText={onChangeSubSelect}
                  selectInfo={selectInfoList}
                />
                <br />
              </>
            )}
          <br />

          <Typography variant="h6" color="initial">
            타이틀 :{" "}
            <TextField
              id="asd"
              label=""
              value={headline}
              onChange={onChangeHeadLine}
              style={{ marginRight: "20px" }}
            />
            <ButtonGroup variant="contained" color="default" aria-label="">
              <Button
                variant="contained"
                color="primary"
                onClick={onClickSubmit}
              >
                게시
              </Button>
            </ButtonGroup>
          </Typography>
          <br />
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
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default WriteEditor;
