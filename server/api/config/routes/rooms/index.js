const express = require("express");
const db = require("../../queries/rooms/index.js");

const rooms = express.Router();

rooms.get("/:id", db.getAllRooms);
rooms.post("/:id", db.createRoom);
rooms.put("/:id", db.updateRoom);
rooms.delete("/:id", db.deleteRoom)

module.exports = rooms;