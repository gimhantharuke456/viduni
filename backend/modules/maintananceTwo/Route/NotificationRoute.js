const express = require("express");
const router = express.Router();
const NotificationController = require("../Controlers/NotificationControle");

// Notification routes
router.get("/", NotificationController.getAllNotifications);
router.post("/", NotificationController.addNotification);
router.get("/:id", NotificationController.getNotificationById);
router.delete("/:id", NotificationController.deleteNotification);

module.exports = router;
