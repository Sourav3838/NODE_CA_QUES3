const express = require('express');
const stdentController = require('../controllers/Student');
const router = express.Router();
/*this will display the main page having details about all the students*/
router.get('/', stdentController.fetchAllStudents);
/*this will display details about the particular student (according to the id)*/
router.get('/students/:studentId', stdentController.fetchStudentDetail);
module.exports = router;
