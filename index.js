require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet'); // Correct import

// Import route files
const studentRoutes = require('./routes/studentRoute');
const courseRoutes = require('./routes/courseRoute');
const courseModuleRoutes = require('./routes/courseModul');
const studentExamResultRoutes = require('./routes/studentExamresult');

const app = express();

const port = process.env.PORT ; 
const baseUrl = process.env.FRONT_END_URL; 

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Enable CORS
app.use(cors({
  origin: ``,
  credentials: true
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"], 
    objectSrc: ["'none'"],
    upgradeInsecureRequests: [],
  },
}));


app.use('/students', studentRoutes);  
app.use('/courses', courseRoutes);    
app.use('/course-modules', courseModuleRoutes);
app.use('/exam-results', studentExamResultRoutes); 


app.listen(port, () => {
  console.log(`Server is running on ${baseUrl}`);
});
