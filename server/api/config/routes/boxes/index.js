const express = require("express");
const db = require("../../queries/boxes");

const boxes = express.Router();

boxes.get("/:id", db.getAllBoxes);
boxes.post("/:id", db.createNewBox);
boxes.put("/:id", db.updateBox);
boxes.delete("/:id", db.deleteBox);

module.exports = boxes;
