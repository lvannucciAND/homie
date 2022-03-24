const express = require("express");
const db = require("../../queries/auth");

const auth = express.Router();

auth.post("/", db.login);

module.exports = auth;