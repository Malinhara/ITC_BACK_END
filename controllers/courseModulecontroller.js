const courseModuleModel = require('../models/coursemoduleModel');

// Create a new course module
const createCourseModule = (req, res) => {
  const moduleData = req.body;
  
  courseModuleModel.createCourseModule(moduleData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating course module' });
    }
    res.status(201).json({ message: 'Course module created successfully!' });
  });
};

// Get all course modules
const getCourseModules = (req, res) => {
  courseModuleModel.getCourseModules((err, modules) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching course modules' });
    }
    res.json(modules);
  });
};

const getCourseModuleByid = (req, res) => {
  const { studentId } = req.params;

  courseModuleModel.getCourseModuleByid( studentId,(err, modules) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching course modules' });
    }
    res.json(modules);
  });
};

module.exports = {
  createCourseModule,
  getCourseModules,
  getCourseModuleByid 
};
