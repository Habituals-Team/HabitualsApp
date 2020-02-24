const db = require('../models/models.js');

const habitControllers = {};

// middlewear to get habits from habits table
habitControllers.getHabits = (req, res, next) => {
  db.query('SELECT * FROM habits', (err, results) => {
    if (err) return next(err);
    res.locals.habits = results.rows;
    next();
  })
};

//middlewear to get info from habits table
habitControllers.getInfo = (req, res, next) => {
  const { id } = req.query;
  db.query(`SELECT * FROM habits WHERE _id = ${id}`,
    (err, results) => {
      if (err) return next(err);
      res.locals.habitInfo = results.rows;
      next();
    })
};

module.exports = habitControllers;