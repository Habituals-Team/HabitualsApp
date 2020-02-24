const express = require('express');
const router = express.Router();

const habitControllers = require('../controllers/habitControllers');
const userControllers = require('../controllers/userControllers');

// route to get habits for home page
router.get('/habits', habitControllers.getHabits, (req, res) => {
  res.status(200).json(res.locals.habits);
});

//route to post user input into DB
router.post('/user-input', userControllers.updateUserHabits, (req, res) => {
  res.status(200)
});

//route to get info for info display when habit icon is clicked
router.post('/habit-info', habitControllers.getInfo, (req, res) => {
  res.send('hello');
  // res.status(200).json(res.locals.habitInfo);
});


module.exports = router;