const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const queryString = require('query-string');

// require routes
const api = require('./routes/api');

// handle parsing request body
app.use(express.json());
app.use(cookieParser());


// route to render html on home page, while providing the front-end the url for the login page
app.get("/", (req, res) => {
  console.log(req.query)
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// route to render html on home page
app.use('/', api);

// route to handle webpack
app.get("/dist/bundle.js", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../dist/bundle.js"));
});

// route to render habit options on home page
app.use('/habits', api);

// route to post user input from form to db
app.use('/user-input', api);

// route to get habit information to render when a habit option is clicked
app.use('/habit-info', api)

//route to check for user in DB
app.use('/user', api);


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