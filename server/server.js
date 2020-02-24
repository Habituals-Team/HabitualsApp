const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const client_secret = require('../client_secret/client_secret');
// const router = require('./routes/api');
const cookieParser = require('cookie-parser');

const client_id = "371087135-djckvfenrkntg92agsc5c7csq2d3cej1.apps.googleusercontent.com";

const api = require('./routes/api');

app.use(bodyParser());

// app.get("/login")

// route to redner html on home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/dist/bundle.js", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../dist/bundle.js"));
});

// route to render habit options on home page
app.use('/habits', api);

// route to post user input from form to db
app.post('/user-input', api);

// route to get habit information to render when a habit option is clicked
app.get('/habit-info', api);



app.listen(3000);