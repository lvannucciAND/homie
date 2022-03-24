const express = require("express");

const users = require("./config/routes/users");
const rooms = require("./config/routes/rooms");
const boxes = require("./config/routes/boxes");
const boxItems = require("./config/routes/boxItems");
const notifications = require("./config/routes/notifications");
const expenses = require("./config/routes/expenses");
const auth = require("./config/routes/auth");

const api = express.Router();

api.use("/users", users);
api.use("/rooms", rooms);
api.use("/boxes", boxes);
api.use("/boxItems", boxItems);
api.use("/notifications", notifications);
api.use("/expenses", expenses);
api.use("/auth", auth);

module.exports = api;