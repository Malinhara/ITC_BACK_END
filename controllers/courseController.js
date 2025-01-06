const courseModel = require('../models/courseModel');

// Get all courses
const getCourses = (req, res) => {
  courseModel.getCourses((err, courses) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching courses' });
    }
    res.json(courses);
  });
};

const createCourse = (req, res) => {
    const courseData = req.body;

    courseModel.createCourse(courseData,(err, courses) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching courses' });
      }
      res.status(201).json({ message: 'course create successfully!' });
    });
  };
  


module.exports = {
  getCourses,createCourse
};
