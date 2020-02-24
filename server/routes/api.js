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

<<<<<<< HEAD
//route to get info for info display
router.get('/habit-info', habitControllers.getInfo, (req, res) => {
=======
//route to get info for info display when habit icon is clicked
router.post('/habit-info', habitControllers.getInfo, (req, res) => {
>>>>>>> 0a3ee143ec3c92594d768228a6283eba20e8a525
  res.status(200).json(res.locals.habitInfo);
});


//NOTE: changed route from '/' to '/habit-info' in router post (now router.get)

module.exports = router;