const express = require('express');
const router = express.Router();

const habitControllers = require('../controllers/habitControllers');
const userControllers = require('../controllers/userControllers');


// handler to getloginUrl (oath) at page start
router.get('/loginUrl', userControllers.getLoginUrl, (req, res) => {
  console.log('attempting to get login url')
  res.status(200).json(res.locals.loginUrl)
});

// handler to get habits for home page
router.get('/habits', habitControllers.getHabits, (req, res) => {
  res.status(200).json(res.locals.habits);
});

// handler to post user input into DB
router.post('/user-input', userControllers.updateUserHabits, (req, res) => {
  res.status(200).json(req.body);
});

// handler to get info for info display
router.get('/', habitControllers.getInfo, (req, res) => {
  res.status(200).json(res.locals.habitInfo);
});

// handler to get get user info on login
router.get('/', userControllers.getUser)

//handler to post user info on new login

//NOTE: changed route from '/' to '/habit-info' in router post (now router.get)

module.exports = router;