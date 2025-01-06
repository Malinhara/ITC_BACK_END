const db = require('../database');

// Create a new course module
const createCourseModule = (module, callback) => {
  const { moduleName, moduleCode, active, user } = module;

  const query = `
    INSERT INTO coursemodule (ModuleName, ModuleCode, Active, User)
    VALUES (?, ?, ?, ?)
  `;
  
  const values = [moduleName, moduleCode, active, user];

  db.query(query, values, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Get all course modules
const getCourseModules = (callback) => {
  const query = 'SELECT * FROM coursemodule';
  db.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const getCourseModuleByid = (id, callback) => {
  const query = `
    SELECT 
      cd.ModuleCode
    FROM studentdetails sd
    JOIN coursedetails cd ON sd.CourseId = cd.CD_ID
    WHERE sd.Id = ?;
  `;

  db.query(query, [id], (err, results) => {
    if (err) {
      callback(err, null); 
    } else {
      if (results.length > 0) {
        const moduleCode = results[0].ModuleCode;
        console.log('ModuleCode:', moduleCode);
        
 
        getModuleDetailsByCode(moduleCode, callback);
      } else {
        callback('No module code found for this student', null);
      }
    }
  });
};

const getModuleDetailsByCode = (moduleCode, callback) => {
  const query = `
    SELECT 
      ModuleId,
      ModuleName
    FROM coursemodule
    WHERE ModuleCode = ?;
  `;

  db.query(query, [moduleCode], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      if (results.length > 0) {
        callback(null, results); 
      } else {
        callback('No module details found for this module code', null);
      }
    }
  });
};

module.exports = {
  createCourseModule,
  getCourseModules,
  getCourseModuleByid
};
