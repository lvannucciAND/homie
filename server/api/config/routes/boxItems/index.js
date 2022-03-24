const express = require("express");
const db = require("../../queries/boxItems");

const boxItems = express.Router();

boxItems.get("/:id", db.getAllBoxItems);
boxItems.post("/:id", db.createNewBoxItem);
boxItems.put("/:id", db.updateBoxItem);
boxItems.delete("/:id", db.deleteBoxItem);

module.exports = boxItems;
