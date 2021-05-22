import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import BasicTextFields from "./Formcomponent";
import Typography from "@material-ui/core/Typography";
import { SimpleModalStyles } from "@layouts/BasicUI/style";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

interface SimpleModalProps {
  title: "Category" | "SubCategory";
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SimpleModal({
  open,
  setOpen,
  title,
}: SimpleModalProps) {
  const classes = SimpleModalStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography
        variant="h4"
        color="initial"
        style={{ textAlign: "center", color: "white", background: "#3f51b5" }}
      >
        Add {title}
      </Typography>
      <BasicTextFields title={title} onClose={handleClose} />
    </div>
  );

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}
