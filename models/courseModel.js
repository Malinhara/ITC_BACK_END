const db = require('../database');

// Get all courses
const getCourses = (callback) => {
  const query = 'SELECT * FROM CourseDetails WHERE Active = 1';
  db.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Create a new course
const createCourse = (courseData, callback) => {
  const { courseName, courseType, duration, medium, courseLevel, moduleCode, active, user } = courseData;

  const query = `
    INSERT INTO CourseDetails (CourseName, CourseType, Duration, Medium, CourseLevel, ModuleCode, Active, User)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [courseName, courseType, duration, medium, courseLevel, moduleCode, active, user ];

  db.query(query, values, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { getCourses, createCourse };
