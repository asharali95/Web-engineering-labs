const express = require("express");
const app = express();
const studentRouter = require("./routes/studentRoutes");
app.use(express.json());

app.use("/api/v1/students", studentRouter);
module.exports = app;
