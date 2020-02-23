const express = require("express");
const app = express();
const path = require("path");

// const hi = require ("./../client/public/index.html")

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/dist/bundle.js", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../dist/bundle.js"));
});

app.listen(3000);
