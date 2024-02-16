const router = require("express").Router();
const {
  addTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controller/taskContoller");

router.post("/", addTask);
router.get("/", getTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
