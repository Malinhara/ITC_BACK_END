const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController'); // Ensure correct path

// Routes for student operations
router.post('/register', studentController.registerStudent);
// router.get('/:id', studentController.getStudentById);
router.get('/', studentController.getStudents);

module.exports = router;
