const express = require("express");
const router = express.Router();
const controller = require("../controller/taskController");

router
.get("/", controller.getAllTasks)
.post("/", controller.addTask)
.get("/:id", controller.getSingleTask)
.put("/:id", controller.updateTask)
.delete("/:id", controller.deleteTask);

module.exports = router;
