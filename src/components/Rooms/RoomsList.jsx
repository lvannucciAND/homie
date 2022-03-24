import React, { useState } from "react";
import { Grid } from "@mui/material";
import RoomBox from "components/Rooms/RoomBox";
import OptionsModal from "./OptionsModal";
import { useHistory } from "react-router-dom";

const RoomsList = ({ rooms, setRooms, openEditModal, setRoomRename }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEdit = () => {
    handleClose();
    openEditModal();
    const findRoom = rooms.find((room) => room.room_ID === selectedRoom);
    setRoomRename(findRoom);
  };

  const handleDelete = () => {
    setRooms(rooms.filter((room) => room.room_ID !== selectedRoom));
    handleClose();
  };

  const onOptionsClick = (e, id) => {
    e.stopPropagation();
    handleOpen();
    setSelectedRoom(id);
  };

  return (
    <Grid
      container
      spacing={2}
      style={{
        maxHeight: "27.5rem",
        overflow: "auto",
        paddingBottom: "1.25rem",
      }}
    >
      {rooms.map((room) => (
        <React.Fragment key={room.room_ID}>
          <RoomBox
            boxCount={room.box_count}
            title={room.room_description}
            onOptionsClick={(e) => onOptionsClick(e, room.room_ID)}
            onRoomClick={() => history.push(`/rooms/${room.room_ID}`)}
          />
        </React.Fragment>
      ))}
      <OptionsModal
        open={open}
        labelLeft="Delete Room"
        labelRight="Rename Room"
        onClose={handleClose}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Grid>
  );
};

export default RoomsList;
