const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
// const router = require('./routes/api');
const habitControllers = require('./controllers/habitControllers');
const userControllers = require('./controllers/userControllers');
const api = require('./routes/api');

app.use(bodyParser());

app.get("/dist/bundle.js", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../dist/bundle.js"));
});

// route to render habit options on home page
app.use('/habits', api);

// route to post user input from form to db
app.post('/user-input', api);

// route to get habit information to render when a habit option is clicked
app.get('/habit-info', api)


// route to render html on home page
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
//NOTE: used "/*" so if refreshed, will go to homepage plus changed to bottom so it can reach specific endpoints

app.listen(3000);
