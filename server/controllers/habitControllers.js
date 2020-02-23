const db = require('../models/models.js');

const habitControllers = {};

habitControllers.getHabits = (req, res, next) => {
  db.query('SELECT * FROM habits', (err, results) => {
    if (err) return next(err);
    res.locals.habits = results.rows;
    return next();
  })
}

module.exports = habitControllers;