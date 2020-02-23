const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
// const router = require('./routes/api');
const habitControllers = require('./controllers/habitControllers')

app.use(bodyParser());
// const hi = require ("./../client/public/index.html")

// app.use('/api', router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/dist/bundle.js", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../dist/bundle.js"));
});

app.get('/habits', habitControllers.getHabits, (req, res) => {
  res.status(200).json(res.locals.habits);
});

app.listen(3000);
