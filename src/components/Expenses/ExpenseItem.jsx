import React from "react";
import { ListItem, Box, Checkbox } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ListedItem = ({
  text,
  view,
  amount,
  checked,
  onChange,
  onViewClick,
  onOptionsClick,
  defaultChecked,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {checked && (
          <Checkbox
            sx={{
              paddingRight: 0,
              color: "#ed6c02",
              "&.Mui-checked": {
                color: "#ed6c02",
              },
            }}
            defaultChecked={defaultChecked}
            onChange={onChange}
          />
        )}
        <ListItem>{text}</ListItem>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between" }}
        onClick={view ? onViewClick : onOptionsClick}
      >
        <ListItem>£{amount}</ListItem>
        <Box
          sx={{
            color: "#ed6c02",
            paddingRight: "0.5rem",
            alignItems: "center",
            display: "flex",
          }}
        >
          {view ? (
            <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
          ) : (
            <MoreHorizIcon />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ListedItem;
