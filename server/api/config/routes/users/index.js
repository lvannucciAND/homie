const express = require("express");
const db = require("../../queries/users");

const users = express.Router();

users.get("/:id", db.getProfile);
users.post("/", db.createNewUser);
users.put("/:id", db.updateUser);
users.delete("/:id", db.deleteProfile);

module.exports = users;