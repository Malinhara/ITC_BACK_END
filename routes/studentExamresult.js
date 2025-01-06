const express = require('express');
const router = express.Router();
const studentExamResultController = require('../controllers/examController'); // Ensure correct path

// Routes for student exam results
router.post('/create', studentExamResultController.createExamResult);
router.post('/studentId', studentExamResultController.getExamResultsByStudent);

module.exports = router;
