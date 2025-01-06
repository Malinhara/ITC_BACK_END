const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController'); // Ensure correct path

// Routes for course operations
router.post('/create', courseController.createCourse);
// router.get('/:id', courseController.getCourseById);
router.get('/', courseController.getCourses);

module.exports = router;
