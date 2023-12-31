const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log(req.socket.remoteAddress);
  console.log(req.headers["x-forwarded-for"]);
  res.render("index");
});

app.get("/favicon.ico", (req, res) => {
  res.sendStatus(200);
});

app.listen(3000);

console.log("App listening at port 3000");
