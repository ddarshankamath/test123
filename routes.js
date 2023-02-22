const express = require("express");
const apiHandller = require("./src/controllers/apiHandller");
module.exports = (app) => {
  app.use(express.json());
  app.use("/api/students", apiHandller);
};
