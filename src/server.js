
var http = require("http");
const express = require("express"),
  app = express(),
  port = process.env.PORT || 14000,
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "4mb" }));
app.use(cors());
app.use(cookieParser());

// require('./api/routes')(app, {});

const endpoints = require("./api/routes/"); //importing route and set to app
console.log("------------", endpoints, "-----------");
app.use(endpoints);

app.listen(port, () => {
  console.log("RESTful API server live on: " + port);
});
