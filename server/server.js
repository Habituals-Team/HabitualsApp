const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
// const router = require('./routes/api');
const habitControllers = require('./controllers/habitControllers');
const userControllers = require('./controllers/userControllers');

app.use(bodyParser());

// route to redner html on home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/dist/bundle.js", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../dist/bundle.js"));
});

// route to render habit options on home page
app.get('/habits', habitControllers.getHabits, (req, res) => {
  res.status(200).json(res.locals.habits);
});

// route to post user input from form to db
app.post('/user-input', userControllers.updateUserHabits, (req, res) => {
  res.status(200)
})

// route to get habit information to render when a habit option is clicked
app.get('/habit-info', habitControllers.getInfo, (req, res) => {
  res.status(200).json(res.locals.habitInfo);
})

// route to get a user's chosen habit and routine to render on calendar


app.listen(3000);
