const db = require('../models/models.js');

const habitControllers = {};

// middlewear to get habits from habits table
habitControllers.getHabits = (req, res, next) => {
  try {
    const text = 'SELECT * FROM habits';
    const result = await db.query(text);
    res.locals.habits = result.rows;
    next();
  }
  catch (err) {
    next({
      log: `habitControllers.getHabits: ERROR: ${err}`,
      message: { err: 'Error occurred in habitControllers.getHabits. Check server logs for more details.' }
    });
  }
}
// habitControllers.getHabits = (req, res, next) => {
//   const text = 'SELECT * FROM habits';
//   db.query(text, (err, results) => {
//     if (err) return next(err);
//     res.locals.habits = results.rows;
//     next();
//   })
// };

// middlewear to get images from images table
habitControllers.getImages = (req, res, next) => {
  try {
    const text = 'SELECT * FROM images';
    const result = await db.query(text);
    res.locals.images = results.row;
    next();
  }
  catch (err) {
    next({
      log: `habitcontrollers.getImages: ERROR: ${err}`,
      message: { err: 'Erorr occurred in habitControllers.getImages. Check server logs for more details.' }
    });
  }
}
// habitControllers.getImages = (req, res, next) => {
//   const text = 'SELECT * FROM images';
//   db.query(text, (err, results) => {
//     if (err) return next(err);
//     res.locals.images = results.rows;
//   })
// }

//middlewear to get info from habits table
habitControllers.getInfo = (req, res, next) => {
  const { id } = req.query;
  try {
    const text = `SELECT * FROM habits WHERE _id = $1`;
    const params = [id];
    const result = await db.query(text, params);
    res.locals.habitInfo = result.rows;
    next();
  }
  catch (err) {
    next({
      log: `habitControllers.getInfo: ERROR: ${err}`,
      message: { err: 'Error occurred in habitControllers.getInfo. Check server logs for more details.' }
    });
  }
}
// habitControllers.getInfo = (req, res, next) => {
//   const { id } = req.query; //NOTE: added const to make sure it was pulling the id path in the get request
//   const text = `SELECT * FROM habits WHERE _id = $1`;
//   const params = [id];
//   db.query(text, params,
//     (err, results) => {
//       if (err) return next(err);
//       res.locals.habitInfo = results.rows;
//       next();
//     });
// };



module.exports = habitControllers;