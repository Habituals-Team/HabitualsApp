const express = require('express');
const router = express.Router();

const habitControllers = require('../controllers/habitControllers');
const userControllers = require('../controllers/userControllers');

// route to get habits for home page
router.get('/', habitControllers.getHabits, (req, res) => {
  res.status(200).json(res.locals.habits);
});

//route to post user input from form
router.post('/', userControllers.updateUserHabits, (req, res) => {
  res.status(200)
});

//route to get info for info display
router.get('/habit-info', habitControllers.getInfo, (req, res) => {
  res.status(200).json(res.locals.habitInfo);
});


//NOTE: changed route from '/' to '/habit-info' in router post (now router.get)

module.exports = router;