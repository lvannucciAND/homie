import React from "react";
import { Typography } from "@mui/material";

const ModalTitle = ({ title }) => {
  return (
    <Typography
      variant="button"
      component="div"
      sx={{ margin: "0 0 0.9375rem 0.625rem" }}
    >
      {title}
    </Typography>
  );
};

export default ModalTitle;
