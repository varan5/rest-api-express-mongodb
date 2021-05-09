const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Importing routes
const postsRoute = require("./routes/post");

// Routes

// Middleware
app.use(bodyParser.json());
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("We are on Home page");
});

// Connecting to the database

var mongoUrl = "mongodb://localhost/rest";
mongoose.connect(
  mongoUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB Conncted")
);

app.listen(8000);
