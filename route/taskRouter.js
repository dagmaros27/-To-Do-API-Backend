const router = require("express").Router();
const {
  addTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controller/taskContoller");

router.post("/tasks", addTask);
router.get("/tasks", getTask);
router.get("/tasks/:id", getTaskById);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;
