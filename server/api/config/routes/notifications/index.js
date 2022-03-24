const express = require("express");
const db = require("../../queries/notifications");

const notifications = express.Router();

notifications.get("/:id", db.getAllNotifications);
notifications.post("/:id", db.createNewNotification);
notifications.put("/:id", db.updateNotification);
notifications.delete("/:id", db.deleteNotification)

module.exports = notifications;