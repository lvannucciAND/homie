import React from "react";
import { Toolbar, Typography } from "@mui/material";

const Title = ({ text, button }) => {
  return (
    <Toolbar>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#3c3486",
          flexGrow: 1,
          display: "flex",
        }}
        variant="h4"
      >
        {text}
      </Typography>
      {button}
    </Toolbar>
  );
};

export default Title;
