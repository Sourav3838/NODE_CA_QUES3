const fs = require('fs');
const path = require('path');
/*path to the json file 'student.json' inside data folder*/
const filePath = path.join(__dirname, '../data', 'student.json');
/*read the JSON file , if there is an error then display it on the console, otherwise return the parsed data*/
const getStudentsFromJsonFile = (cb) => {
	fs.readFile(filePath, (err, data) => {
		if (err) return cb([]);
		else return cb(JSON.parse(data));
	});
};

class Student {
	constructor(obj) {
		/*all the details of the new student given by the user has been given to the constructor in the form of an object*/
		this.name = obj.name;
		this.age = obj.age;
		this.course = obj.course;
	}
	add() {
		fs.readFile(filePath, (err, data) => {
			/*throw an error if file is not present*/
			let students = [];
			if (!err) {
				students = JSON.parse(data);
			}
			this.id = Math.random().toString(); /*a random unique number as 
			ID for each student to be stored*/
			this.date = new Date().toLocaleDateString();
			/*date at which student was enrolled*/
			/*this refers to the current object*/
			students.push(this); /*push all the details like Id,name,age,course,
			date into the students array*/
			/*write the details of the student into the file (in object form)*/
			fs.writeFile(filePath, JSON.stringify(students), (err) => {
				/*display on console/terminal if error occurs*/
				if (err) console.log(err);
			});
		});
	}
	/*if a function is static then we dont need an object to call this function 
outside the class,we can simply call it with name of the class like:- className.staticFunctionName*/
	static fetchAll(cb) {
		/*passed the callback to the function*/
		getStudentsFromJsonFile(cb);
	}
	static findById(id, cb) {
		/*below mentioned function will return all the students details from the 
JSON file*/
		getStudentsFromJsonFile((students) => {
			/*we will filter out from the data,to get the details of the specific
student with the help of the unique id*/
			const uniqueStudent = students.filter((Details) => {
				return Details.id === id;
			});
			/*return the details of the specific student*/
			cb(uniqueStudent);
		});
	}
}
module.exports = Student;
