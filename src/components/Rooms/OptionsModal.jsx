import React from "react";
import Modal from "components/Modal/Modal";
import ModalTitle from "components/Modal/ModalTitle";
import CloseIcon from "@mui/icons-material/Close";
import { Button, CardActions } from "@mui/material";

const EditRoomModal = ({ open, onClose, onEdit, onDelete, labelLeft, labelRight }) => {
  return (
    <Modal open={open}>
      <Button sx={style} onClick={onClose}>
        <CloseIcon sx={{ color: "#bbb" }} />
      </Button>
      <ModalTitle title="Options" />
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={onDelete}
          sx={{
            flex: 1,
            bgcolor: "warning.main",
            "&:hover": {
              bgcolor: "#3c3486",
            },
          }}
        >
          {labelLeft}
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={onEdit}
          sx={{
            flex: 1,
            bgcolor: "warning.main",
            "&:hover": {
              bgcolor: "#3c3486",
            },
          }}
        >
          {labelRight}
        </Button>
      </CardActions>
    </Modal>
  );
};

const style = {
  margin: "-1.25rem 0 -0.625rem 1.25rem",
  padding: 0,
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  color: "#fff",
  "&:hover": {
    bgcolor: "#fff",
  },
};

export default EditRoomModal;
