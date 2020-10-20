const express = require('express');
const router = express.Router();
//middleware to check if age is greater then 18 or not
const { ensureAge } = require('../middleware/Auth');
const studentController = require('../controllers/Student');
/*when ever user will hit the url having '/add-student' we will go to addStudents part of the controller*/
router.get('/add-student', studentController.addStudents);
/*when ever user will hit the url having '/students' we will go to the middleware 'ensureAge' to check the required condition of Age,and if its 
passes the middleware layer then we will go to the studentsIntoFile part of the controller*/
router.post('/students', ensureAge, studentController.studentsIntoFile);
module.exports = router;
