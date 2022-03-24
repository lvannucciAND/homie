import React from "react";
import { TextField } from "@mui/material";
import CreateModal from "components/Modal/CreateModal";

const CreateRoomModal = ({
  open,
  onSave,
  onClose,
  onChange,
  roomName,
  modalTitle,
}) => {
  return (
    <CreateModal
      open={open}
      onButtonSave={onSave}
      onModalClose={onClose}
      modalTitle={modalTitle}
      onButtonCancel={onClose}
      cardContent={
        <TextField
          fullWidth
          id="fullWidth"
          value={roomName}
          onChange={onChange}
          label="Type in a room name"
          required
        />
      }
    />
  );
};

export default CreateRoomModal;
