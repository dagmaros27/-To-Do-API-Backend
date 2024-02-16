const Task = require("../model/taskModel");
const asyncHandler = require("express-async-handler");

const addTask = asyncHandler(async (req, res) => {
  const task = req.body.task;
  const newTask = new Task(task);

  try {
    const savedTask = await newTask.save();
    res.status(200).send(savedTask);
  } catch (error) {
    res.status(500).send(error);
  }
});

const getTask = asyncHandler(async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const getTaskById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findById(id);
    if (task) {
      res.status(200).send(task);
    } else {
      res.status(404).send({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const updateTask = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body.task;
  try {
    const task = await Task.findByIdAndUpdate(id, updatedTask, { new: true });
    if (task) {
      res.status(200).send(task);
    } else {
      res.status(404).send({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const deleteTask = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (task) {
      res.status(200).send({ message: "Task deleted successfully" });
    } else {
      res.status(404).send({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = { addTask, getTask, getTaskById, updateTask, deleteTask };
