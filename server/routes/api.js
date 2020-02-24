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
  res.status(200).json(req.body);
});

//route to get info for info display
router.get('/habit-info', habitControllers.getInfo, (req, res) => {
  res.status(200).json(res.locals.habitInfo);
});


//NOTE: changed route from '/' to '/habit-info' in router post (now router.get)

module.exports = router;