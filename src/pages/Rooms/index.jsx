import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Layout from "components/Layout";
import RoomTitle from "components/RoomTitle";
import AddButton from "components/AddButton";
import RoomsList from "components/Rooms/RoomsList";
import { getRoomsByUserID, getAllBoxes } from 'utilities/axios';

import CreateRoomModal from "components/Rooms/CreateRoomModal";

const mockUser = {
  address: "10 tenant street",
  created_at: "2022-03-23T00:00:00.000Z",
  email: "lorenzo@and.com",
  furnished: false,
  id: 1,
  move_date: "2022-10-09T23:00:00.000Z",
  password: "123456",
  postcode: "m4 654",
  updated_at: "2022-03-23T00:00:00.000Z",
};

const Rooms = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [roomName, setRoomName] = useState("");
  const [roomRename, setRoomRename] = useState(null);
  const [modalTitle, setModalTitle] = useState('Create a new room');
  const [isFetching, setFetching] = useState(null);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetching(true);
        const res = await getRoomsByUserID(mockUser.id);
        setRooms(res);
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  },[]);

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
      {rooms && rooms.length && (
        <>
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
        </>
      )}
    </Layout>
  );
};

export default Rooms;
