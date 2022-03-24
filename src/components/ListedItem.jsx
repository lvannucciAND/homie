import React from "react";
import { ListItem, Box } from "@mui/material";

const ListedItem = ({
  text,
  amount,
}) => {
  const style = {
    fontWeight: "bold",
    fontSize: "1.125rem",
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <ListItem sx={style}>{text}</ListItem>
      <ListItem sx={{...style, display: "flex", justifyContent: "flex-end"}}>£{amount}</ListItem>
    </Box>
  );
};

export default ListedItem;
