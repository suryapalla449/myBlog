const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { userName: "Surya" });
});

app.listen(3000);