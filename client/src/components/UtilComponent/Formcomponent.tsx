import React, { useCallback, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "50ch",
        padding: "20px",
        boxSizing: "border-box",
      },
    },
    alert: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

interface BasicTextFieldsProp {
  onClose: () => void;
  title: "Category" | "SubCategory";
}

export default function BasicTextFields({
  onClose,
  title,
}: BasicTextFieldsProp) {
  const classes = useStyles();
  const [currency, setCurrency] = useState("EUR");
  const [alertMessage, setAlertMessage] = useState("");
  const onsubmitForm = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (title === "Category") {
      //카테고리명이 존재하는지 로직 꼭 필요
      //1.redux store의 카테고리 데이터로 조회
      //2.

      const categoryValue: string = (
        e.target as any
      ).catagorypathname.value.trim();
      const categoryPathNameValue: string = (
        e.target as any
      ).catagorypathname.value.trim();

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
    } else {
      console.log((e.target as any).subcategory.value);
      console.log((e.target as any).select.value);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

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
          <TextField name="catagory" id="standard-basic" label="CategoryName" />
          <br />
          <TextField
            name="catagorypathname"
            id="standard-basic"
            label="pathName"
            placeholder="/pathname"
          />
          <br />
        </>
      ) : (
        <>
          <TextField
            select
            label="Select"
            value={currency}
            name="select"
            onChange={handleChange}
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
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
        <Alert onClose={handleClose} severity="warning">
          {alertMessage}
        </Alert>
      </Snackbar>
    </form>
  );
}
