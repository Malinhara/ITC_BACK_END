const express = require('express');
const router = express.Router();
const courseModuleController = require('../controllers/courseModulecontroller'); // Ensure correct path

// Routes for course module operations
router.post('/create', courseModuleController.createCourseModule);
// router.get('/:id', courseModuleController.getCourseModuleById);
router.get('/', courseModuleController.getCourseModules);
router.get('/:studentId', courseModuleController.getCourseModuleByid);

module.exports = router;
