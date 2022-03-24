import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddButton = ({ onClick }) => {
  return (
    <Fab
      onClick={onClick}
      size="small"
      sx={{
        color: "#fff", bgcolor: "warning.main", '&:hover': {
          bgcolor: "#3c3486",
       },
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
