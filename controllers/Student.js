const Student = require('../models/students');
/*to render the form page where user can give details about the new student to be added*/
exports.addStudents = (req, res, next) => {
	/*rendered to add-student.ejs from views folder along with values passed under the names of 'path' and 'title'*/
	res.render('add-student', {
		title: 'AddStudent',
		path: '/user/add-student',
	});
};
/*after user has given the details of the new student and click on the submit button ,the form will perform its action and will hit the url to '/user/students' which will call for this part in controllers,
 now we are going to add the details of student given by the user in to a json file.*/
exports.studentsIntoFile = (req, res, next) => {
	/*we have given all the data provided by the user to the model contructor */
	const students = new Student(req.body);
	/*add function inside the model , will add the details into the JSON file*/
	students.add();
	/*after adding the data we will move back to the main page*/
	res.redirect('/');
};
/*to display all the students on the home page*/
exports.fetchAllStudents = (req, res, next) => {
	/*called the static function 'fetchAll' from the model*/
	Student.fetchAll((students) => {
		/*it will return the details of all the students*/
		console.log('all students:-', students);
		/*render to the view 'student.ejs' ,all the details of students are send 
to the page under the name of 'student',along with values passed under the 
names of 'path' and 'title'*/
		res.render('student', {
			student: students,
			title: 'HomePage',
			path: '/',
		});
	});
};
/* whenever a user will click on a particular name of student this function will be invoked , here we will take the id of the 
student ,clicked through 'req.params.studentId' and save it under constant 'id'*/
exports.fetchStudentDetail = (req, res, next) => {
	const id = req.params.studentId;
	/*called the static function 'findById' from the model by passing the id
fetched and a callback*/
	Student.findById(id, (students) => {
		/*it will return the detail of the particular student*/
		console.log('unique student by id:-', students);
		/*render to 'StudentDetails.ejs' under views folder and passed the detail 
of the particular student under the name of 'student' , along with values passed under the names of 'path' and 'title'*/
		res.render('StudentDetails', {
			student: students,
			title: 'studentDisplay',
			path: '/',
		});
	});
};
