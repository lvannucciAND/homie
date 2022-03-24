import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Layout from "components/Layout";
import RoomTitle from "components/RoomTitle";
import AddButton from "components/AddButton";
import RoomsList from "components/Rooms/RoomsList";
import CreateRoomModal from "components/Rooms/CreateRoomModal";

const Rooms = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [roomName, setRoomName] = useState("");
  const [roomRename, setRoomRename] = useState(null);
  const [modalTitle, setModalTitle] = useState('Create a new room');
  const [rooms, setRooms] = useState([
    {
      room_ID: 1,
      room_description: "Kitchen",
      created_at: "",
      updated_at: "",
      box_count: 3,
    },
    {
      room_ID: 2,
      room_description: "Bedroom 1",
      created_at: "",
      updated_at: "",
      box_count: 5,
    },
    {
      room_ID: 3,
      room_description: "Bedroom 2",
      created_at: "",
      updated_at: "",
      box_count: 1,
    },
  ]);

  const handleChange = (e) => {
    setRoomName(e.target.value);
  };

  const updateRoom = (room_description, room_ID, box_count) => {
    const newRoom = rooms.map((room) =>
      room.room_ID === room_ID ? { room_description, room_ID, box_count } : room
    );
    setRooms(newRoom);
    setRoomRename("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!roomRename) {
      setRooms([
        ...rooms,
        { room_ID: uuidv4(), room_description: roomName, box_count: 0 },
      ]);
      setRoomName("");
      handleClose();
    } else {
      updateRoom(roomName, roomRename.room_ID, roomRename.box_count);
      setRoomName("");
      handleClose();
    }
  };

  const handleOpenEditModal = () => {
    setOpen(true);
    setModalTitle('Rename Room')
  }

  return (
    <Layout>
      <RoomTitle text="Rooms" button={<AddButton onClick={handleOpen} />} />
      <CreateRoomModal
        open={open}
        roomName={roomName}
        onSave={handleSave}
        onClose={handleClose}
        onChange={handleChange}
        modalTitle={modalTitle}
      />
      <RoomsList
        rooms={rooms}
        setRooms={setRooms}
        setRoomRename={setRoomRename}
        openEditModal={handleOpenEditModal}
      />
    </Layout>
  );
};

export default Rooms;
