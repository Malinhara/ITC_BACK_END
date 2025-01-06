const db = require('../database');

// Register a new student
const registerStudent = (student, callback) => {
  const { fullName,
    nameWithInitials,
    nic,
    misNumber,
    mobile,
    address,
    gender,
    courseId, // Initialized with a default number
    courseYear, // Initialized with a default number
    dropout,
    finalExamSitted,
    repeatStudent,
    user } = student;

  const query = `
    INSERT INTO StudentDetails (FullName, NameWithInitials, NIC, MISNumber, Mobile, Address, Gender, CourseId, CourseYear, Dropout, FinalExamSitted, RepeatStudent, User)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  const values = [fullName,
    nameWithInitials,
    nic,
    misNumber,
    mobile,
    address,
    gender,
    courseId, // Initialized with a default number
    courseYear, // Initialized with a default number
    dropout,
    finalExamSitted,
    repeatStudent,
    user ];

  db.query(query, values, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


const getStudents = (callback) => {
    const query = `SELECT * FROM StudentDetails WHERE Deleted = 0 `;
    
    db.query(query,(err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  };

module.exports = {
  registerStudent,getStudents
};
