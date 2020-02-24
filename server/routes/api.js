const express = require('express');
const router = express.Router();

const habitControllers = require('../controllers/habitControllers');
const userControllers = require('../controllers/userControllers');


// route to getloginUrl (oath) at page start
router.get('/loginUrl', userControllers.getLoginUrl, (req, res) => {
  console.log('attempting to get login url')
  res.status(200).json(res.locals.loginUrl)
});

router.get('/', userControllers.getGoogleId, (req,res) => {
  res.status(200).send('hi')
})

// route to get habits for home page
router.get('/habits', habitControllers.getHabits, (req, res) => {
  res.status(200).json(res.locals.habits);
});

//route to post user input into DB
router.post('/user-input', userControllers.updateUserHabits, (req, res) => {
  res.status(200).json(req.body);
});

//route to get info for info display when habit icon is clicked
router.post('/habit-info', habitControllers.getInfo, (req, res) => {
  res.status(200).json(res.locals.habitInfo);
});


module.exports = router;