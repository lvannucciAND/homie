import React from "react";
import Modal from "./Modal";
import ModalTitle from "./ModalTitle";
import { Button, CardContent, CardActions } from "@mui/material";

const CreateModal = ({
  open,
  onModalClose,
  modalTitle,
  cardContent,
  onButtonCancel,
  onButtonSave,
}) => {
  return (
    <Modal open={open} onModalClose={onModalClose}>
      <ModalTitle title={modalTitle} />
      <CardContent sx={{ padding: "0 0.625rem 0.9375rem" }}>
        {cardContent}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={onButtonCancel}
          sx={{
            flex: 1,
            bgcolor: "warning.main",
            "&:hover": {
              bgcolor: "#3c3486",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={onButtonSave}
          sx={{
            flex: 1,
            bgcolor: "warning.main",
            "&:hover": {
              bgcolor: "#3c3486",
            },
          }}
        >
          Save
        </Button>
      </CardActions>
    </Modal>
  );
};

export default CreateModal;
