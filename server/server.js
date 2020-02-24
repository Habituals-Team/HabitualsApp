const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const client_secret = require('../client_secret/client_secret');
// const router = require('./routes/api');
const cookieParser = require('cookie-parser');

const client_id = "371087135-djckvfenrkntg92agsc5c7csq2d3cej1.apps.googleusercontent.com";

const api = require('./routes/api');

// route to api's to handle users/habits requests
app.use('/', api);


app.use(bodyParser());

// 
// app.get("/login")

// route to redner html on home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// route to handle webpack
app.get("/dist/bundle.js", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../dist/bundle.js"));
});  



app.listen(3000);