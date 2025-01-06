const studentModel = require('../models/studentModel');

// Register a new student
const registerStudent = (req, res) => {
  const studentData = req.body;
  
  studentModel.registerStudent(studentData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error registering student' });
    }
    res.status(201).json({ message: 'Student registered successfully!' });
  });
};

const getStudents = (req,res)=>{
       studentModel.getStudents((err, students) => {
        if (err) {
          return res.status(500).json({ error: 'Error fetching course modules' });
        }
        res.json(students);
      });
}

module.exports = {
  registerStudent,getStudents
};
