const db = require('../models/models.js');

const userControllers = {};

// controller to post a user's form info to db
userControllers.updateUserHabits = (req, res, next) => {
  db.query(`INSERT INTO user_habits (users_id, habits_id, memo, routine_id, start_date, end_date, created_date) 
            VALUES (${req.body.usersId}, ${req.body.habitsId}, ${req.body.memo}, ${req.body.routineId}, ${req.body.startDate}, ${req.body.endDate}, NOW())`,
    (err, results) => {
      // results return an empty array?
      if (err) return next(err);
      console.log('successful post!');
      next();
    });
};

module.exports = userControllers;