const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const queryString = require('query-string');
const request = require('request');
const fetch = require('node-fetch');

// importing google api 
const { google } = require('googleapis');
const client_secret = require('../client_secret/client_secret');

// require routes
const api = require('./routes/api');

// handle parsing request body
app.use(express.json());
app.use(cookieParser());


// route to render html on home page, while providing the front-end the url for the login page
app.get("/", (req, res) => {
    // post redirect/callback -- already have code
    
    if (req.query.code){
      // console.log('inside query');
      // console.log(req.query.code);
      const code = req.query.code;
      const data = {
        client_id : '371087135-djckvfenrkntg92agsc5c7csq2d3cej1.apps.googleusercontent.com',
        client_secret : client_secret,
        code : code,
        grant_type : 'authorization_code',
        redirect_uri : 'http://localhost:8080/',
      }
      fetch('https://oauth2.googleapis.com/token', {
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success: ', data)
        const access_token = data.access_token;
        const refresh_token = data.refresh_token;

        // make a get request to use API!!
        fetch(`https://www.googleapis.com/drive/v2/files?access_token=${access_token}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {

            console.log(data)
          })
          .catch((error) => {
            res.send(error)
          })
          


      })
      .catch((error) => {
        res.send(error)
      })

    


  }
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