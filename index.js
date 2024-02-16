const express = require("express");
const mongoose = require("mongoose");
const taskRouter = require("./route/taskRouter");

const port = 1234;
const mongoURI = "mongodb://localhost:27017/tasks";
const app = express();

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());
app.get("/", (req, res) => {
  res.send("task crud server");
});
app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
