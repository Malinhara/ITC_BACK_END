const studentExamResultModel = require('../models/stuExamResult'); // Ensure correct relative path

// Create a new exam result
const createExamResult = (req, res) => {
  const examResultData = req.body;

  studentExamResultModel.createExamResult(examResultData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating exam result' });
    }
    res.status(201).json({ message: 'Exam result created successfully!' });
  });
};

// Get all exam results for a specific student
const getExamResultsByStudent = (req, res) => {
    const studentId = req.body.studentId;

  studentExamResultModel.getExamResultsByStudent(studentId, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching exam results' });
    }
    res.json(results);
  });
};

module.exports = {
  createExamResult,
  getExamResultsByStudent,
};
