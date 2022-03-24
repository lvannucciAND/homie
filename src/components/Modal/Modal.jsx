import React from "react";
import { Card, Snackbar } from "@mui/material";

const Modal = ({ children, open, onClose }) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      sx={{ height: "100%" }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Card sx={style}>{children}</Card>
    </Snackbar>
  );
};

const style = {
  width: 300,
  bgcolor: "background.paper",
  borderRadius: "0.3125rem",
  boxShadow: 24,
  p: 4,
};

export default Modal;
