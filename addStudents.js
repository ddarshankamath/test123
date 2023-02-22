const express = require("express");
const router = express.Router();
const model = require("../models/studentModel");

router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const addData = new model({
      name: name,
      email: email,
    });
    const data = await addData.save();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
