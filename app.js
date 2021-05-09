const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Routes

app.get("/", (req, res) => {
  res.send("We are on Home page");
});

app.get("/posts", (req, res) => {
  res.send("We are on Posts");
});

// Connecting to the database

var mongoUrl = '"mongodb://localhost/rest"';
mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB Conncted")
);

app.listen(8000);
