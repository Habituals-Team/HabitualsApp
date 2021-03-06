const db = require('../models/models.js');
const { google } = require('googleapis')


const client_secret = require('../../client_secret/client_secret')

const userControllers = {};


// OATH STARTS HERE
// controller to generate login url
userControllers.getLoginUrl = (req, res, next) => {
  // initialize a config object
  const googleConfig = {
    clientId: '371087135-djckvfenrkntg92agsc5c7csq2d3cej1.apps.googleusercontent.com',
    clientSecret: client_secret,
    redirect: 'http://localhost:8080/'
  };

  //Create the google auth object which gives us access to talk to google's apis.
  const createConnection = () => {
    return new google.auth.OAuth2(
      googleConfig.clientId,
      googleConfig.clientSecret,
      googleConfig.redirect
    );
  }

  //This scope tells google what information we want to request.
  const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
  ];

  // Get a url which will open the google sign-in page and request access to the scope provided (such as calendar events)
  const getConnectionUrl = (auth) => {
    return auth.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent', // access type and approval prompt will force a new refresh token to be made each time signs in
      scope: defaultScope
    });
  }


  // Create the google url to be sent to the client.
  const urlGoogle = () => {
    const auth = createConnection(); // this is from previous step
    const url = getConnectionUrl(auth);
    return url;
  }







  // first time the page loads
  console.log(urlGoogle())
  res.locals.loginUrl = urlGoogle();
  next();
}



userControllers.getGoogleId = (req, res, next) => {
  next();
}
/// OATH ENDS HERE

// middleware to get user info from db
userControllers.getUser = (req, res, next) => {
  const text =
    `SELECT username 
    FROM users 
    WHERE username=$1`;
  const params = oauthObj.id;   // MUST CHANGE ID PASSED INTO QUERY BASED ON GOOGLE OAUTH
  try {
    const data = await db.query(text, params);
    if (!data) {
      console.log('user does not exist, create new user');
      return next();
    }
    res.locals.userInfo = data;
    return next();
  }
  catch (err) {
    return next({
      log: `userControllers.getUser: ERROR: ${err}`,
      message: { err: 'Error occurred in userControllers.getUser. Check server logs for more details.' }
    });
  }
}

// middleware to post new user info to db
userControllers.postUser = (req, res, next) => {
  try {
    const text = 'INSERT INTO users (username, password, first_name, last_name) VALUES ($1, $2, $3)';
    const params = [oauthObj.username, oauthObj.firstName, oauthObj.lastName];
    const results = await db.query(text, params);
    res.locals.userInfo = results;
    console.log('new user created!');
    return next();
  }
  catch (err) {
    return next({
      log: `userControllers.postUser: ERROR: ${err}`,
      message: { err: 'Error occurred in userControllers.postUser. Check server logs for more details.' }
    })
  }
}

// middleware to post new routine
userControllers.updateRoutine = async (req, res, next) => {
  try {
    const text = 'INSERT INTO routine (users_id, repeat_every, repeat_frequency) VALUES ($1, $2, $3})';
    const params = [req.body.usersId, req.body.repeatEvery, `${req.body.repeatFrequency}`];
    const results = await db.query(text, params);
    console.log('successful post!');
    res.locals.routine = results.rows;
    return next();
  }
  catch (err) {
    return next({
      log: `userControllers.updateRoutine: ERROR: ${err}`,
      message: { err: 'Error occurred in userControllers.updateRoutine. Check server logs for more details.' }
    })
  }
}

// middleware to post a user's form info to db
userControllers.updateUserHabits = (req, res, next) => {
  // console.log('this is req.body', req.body);
  try {
    const text = 'INSERT INTO user_habits (users_id, habits_id, memo, routine_id, start_date, end_date, created_date) VALUES($1, $2, $3, $4, $5, $6)';
    const params = [req.body.usersId, req.body.habitsId, `${req.body.memo}`, req.body.routineId, `${req.body.startDate}`, `${req.body.endDate}`, NOW()];
    const results = db.query(text, params);
    console.log('successful post!');
    // should send some data back to front end -- fix later
    return next();
  }
  catch (err) {
    return next({
      log: `userControllers.updateUserHabits: ERROR: ${err}`,
      message: { err: 'Error occurred in userControllers.updateUserHabits. Check server logs for more details.' }
    })
  }
};

module.exports = userControllers;