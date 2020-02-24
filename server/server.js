const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// client secret
const client_secret = require('../client_secret/client_secret');
// client id from google oath
const client_id = "371087135-djckvfenrkntg92agsc5c7csq2d3cej1.apps.googleusercontent.com";


// require routes
const api = require('./routes/api');

// handle parsing request body
app.use(express.json());
app.use(cookieParser());


// route to render html on home page, while providing the front-end the url for the login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});  

// route to api's to handle users/habits requests
app.use('/', api);

// route to handle webpack
app.get("/dist/bundle.js", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../dist/bundle.js"));
});  

// catch-all route handler for any requests to an unknown route
app.use("/", (req, res, next) => {
  res.sendStatus(404);
});

// error handler
app.use((err, req, res, next) => {
  console.log(err)
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" }
  };
  const errObj = Object.assign(defaultErr, err);
  res.status(errObj.status).json(errObj.message);
});


app.listen(3000);