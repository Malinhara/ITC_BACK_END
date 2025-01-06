const db = require('../database');

// Create a new exam result for a student
const createExamResult = (examResult, callback) => {
  const { StudentId, courseYear, moduleCode, marks, user } = examResult;

  console.log(StudentId, courseYear, moduleCode, marks, user)
  const query = `
    INSERT INTO studentexamresult  (StudentId, courseYear, ModuleCode, marks, User)
    VALUES (?, ?, ?, ?, ?)
  `;
  
  const values = [StudentId, courseYear, moduleCode, marks, user];

  db.query(query, values, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Get all exam results for a specific student
const getExamResultsByStudent = (studentId, callback) => {

  const query = `
  SELECT 
    se.StudentId,
    sd.FullName,
    se.CourseYear,
    se.Marks,
    cm.ModuleName
  FROM studentexamresult se
  JOIN studentdetails sd ON se.StudentId = sd.id
  JOIN coursemodule cm ON se.ModuleCode = cm.Moduleid
  WHERE se.StudentId = ? AND se.Marks > 40 AND sd.FinalExamSitted = 1 AND sd.Deleted = 0
`;

  db.query(query, [studentId], (err, results) => {
    console.log(results)
    console.log()
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {createExamResult, getExamResultsByStudent};
