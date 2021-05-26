import React, { useCallback, useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "@material-ui/core";
import SimpleModal from "@components/UtilComponent/ModalComponent";
import { HeaderStyle } from "@layouts/BasicUI/style";

const Header = () => {
  const classes = HeaderStyle();
  const [openModal, setOpenModal] = useState(false);
  const [openModalSubcategory, setOpenModalSubcategory] = useState(false);
  const onClickOpenModal = useCallback(() => {
    setOpenModal(prev => !prev);
  }, []);
  const onClickOpenSubCatogory = useCallback(() => {
    setOpenModalSubcategory(prev => !prev);
  }, []);
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" style={{ zIndex: 11111 }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" color="initial" className={classes.title}>
            <Link component={RouterLink} to="/" style={{ color: "white" }}>
              Main
            </Link>
          </Typography>
          <div className={classes.button}>
            <Link component={RouterLink} to="/write" style={{ color: "white" }}>
              write
            </Link>
            <Button color="inherit" onClick={onClickOpenModal}>
              카테고리 추가
            </Button>
            <Button color="inherit" onClick={onClickOpenSubCatogory}>
              세부 카테고리 추가
            </Button>
          </div>
        </Toolbar>
        {openModal && (
          <SimpleModal
            title={"Category"}
            open={openModal}
            setOpen={setOpenModal}
          />
        )}
        {openModalSubcategory && (
          <SimpleModal
            title={"SubCategory"}
            open={openModalSubcategory}
            setOpen={setOpenModalSubcategory}
          />
        )}
      </AppBar>
    </>
  );
};

export default Header;
