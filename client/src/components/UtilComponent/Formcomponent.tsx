import React, { useCallback, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { ROOTSTATE } from "../../reducers/root";
import {
  getTopicListSiderBarAction,
  resetWriteSubTopicAction,
  resetWriteTopicAction,
  writeSubTopicInfoAction,
  writeTopicInfoAction,
} from "@actions/post";
import { useInput } from "@hooks/useInput";
import SelectInputComponent from "./SelectInputComponent";
import { BasicTextFieldsStyles } from "@layouts/BasicUI/style";
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export interface SelectInfo {
  value: string;
  label: string;
}

interface BasicTextFieldsProp {
  onClose: () => void;
  title: "Category" | "SubCategory";
}

export default function BasicTextFields({
  onClose,
  title,
}: BasicTextFieldsProp) {
  const classes = BasicTextFieldsStyles();
  const dispatch = useDispatch();
  ``;
  const {
    writeCateogoryMessage,
    sideBarCategoryInfos,
    writeSubCateogoryMessage,
  } = useSelector((state: ROOTSTATE) => state.post);
  const [selectInfo, setSelectInfo] = useState<SelectInfo[]>([]);
  const [text, onChangeText] = useInput("");
  const [text1, onChangeText1] = useInput("");
  const [alertMessage, setAlertMessage] = useState("");
  const [open, setOpen] = React.useState(false);

  const onsubmitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (title === "Category") {
        const categoryValue: string = (text as string).trim();
        const categoryPathNameValue: string = (text1 as string).trim();
        const filterdata = categoryValue.match(
          /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/g
        );
        if (filterdata && filterdata?.length > 0) {
          setAlertMessage("카테고리에 특수문자 빼주세요");
          handleClick();
          return;
        }
        const validationPathName = categoryPathNameValue
          .match(/\/*/g)!
          .filter(v => v !== "");
        if (categoryValue === "" || categoryPathNameValue === "") {
          setAlertMessage("카테고리 명 , pathname을 적어주세요");
          handleClick();
          return;
        }
        if (validationPathName.length === 0 || validationPathName.length > 1) {
          setAlertMessage("pathName에 /하나를 추가해주세요");
          handleClick();
          return;
        }
        dispatch(
          writeTopicInfoAction.ACTION.REQUEST({
            title: categoryValue,
            pathname: categoryPathNameValue,
          })
        );
      } else {
        if ((text1 as string).trim() === "") {
          setAlertMessage("세부 카테고리를 추가해주세요");
          handleClick();
          return;
        }
        dispatch(
          writeSubTopicInfoAction.ACTION.REQUEST({
            topicId: Number(text),
            title: text1 as string,
          })
        );
      }
    },
    [text, text1]
  );

  useEffect(() => {
    let timeout: any = null;
    if (writeCateogoryMessage !== "idle..." && writeCateogoryMessage) {
      setAlertMessage(writeCateogoryMessage);
      handleClick();
      if (writeCateogoryMessage === "sucess") {
        dispatch(getTopicListSiderBarAction.ACTION.REQUEST());
        timeout = window.setTimeout(() => {
          onClose();
          dispatch(resetWriteTopicAction());
        }, 1000);
      }
    }
    if (writeCateogoryMessage === "Failure") dispatch(resetWriteTopicAction());
    if (writeSubCateogoryMessage === "Failure")
      dispatch(resetWriteSubTopicAction());

    if (writeSubCateogoryMessage !== "idle..." && writeSubCateogoryMessage) {
      setAlertMessage(writeSubCateogoryMessage);
      handleClick();
      if (writeSubCateogoryMessage === "sucess") {
        dispatch(getTopicListSiderBarAction.ACTION.REQUEST());
        timeout = window.setTimeout(() => {
          onClose();
          dispatch(resetWriteSubTopicAction());
        }, 1000);
      }
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [writeCateogoryMessage, writeSubCateogoryMessage]);

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

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <form
      style={{ textAlign: "center" }}
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={onsubmitForm}
    >
      {title === "Category" ? (
        <>
          <TextField
            onChange={onChangeText}
            name="catagory"
            id="standard-basic"
            label="CategoryName"
          />
          <br />
          <TextField
            onChange={onChangeText1}
            name="catagorypathname"
            id="standard-basic"
            label="pathName"
            placeholder="/pathname"
          />
          <br />
        </>
      ) : (
        <>
          {selectInfo.length !== 0 && (
            <SelectInputComponent
              onChangeText={onChangeText}
              selectInfo={selectInfo}
            />
          )}
          <br />
          <TextField
            onChange={onChangeText1}
            name="subcategory"
            id="standard-basic"
            label="SubCategoryName"
            placeholder="SubCategoryName"
          />
          <br />
        </>
      )}
      <ButtonGroup variant="text" color="default" disableElevation>
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
        <Button variant="contained" color="primary" onClick={onClose}>
          close
        </Button>
      </ButtonGroup>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          {alertMessage}
        </Alert>
      </Snackbar>
    </form>
  );
}
