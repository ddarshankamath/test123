const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes")(app);

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  // useUnifieldTopology: true,
  useUnifiedTopology: true,
});
const con = mongoose.connection;
con.on("open", () => {
  console.log("server started");
});
// app.get("/a", (req, res) => {
//   res.send("hello world");
// });
// app.get("/", (req, res) => {
//   res.send("helloooooo");
// });
// app.post("/add", (req, res) => {
//   res.send("post req");
// });
app.listen(3000, () => {
  console.log("listening at 3000");
});
