const express = require("express");
const router = express.Router();

const apiHandller = require("./addStudents");
router.use("/add_students", apiHandller);
module.exports = router;
