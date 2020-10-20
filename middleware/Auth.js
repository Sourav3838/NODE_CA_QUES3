/*here inside the if condition we are first checking if the age given by the 
user is greater then 18 ,if yes then go to the controller and if not then change 
the status code to 404 and send an error message.*/

module.exports = {
	ensureAge: function (req, res, next) {
		if (req.body.age > 18) {
			return next();
		} else {
			res.statusCode = 404;
			res.send('error : age is less than or equal to 18');
		}
	},
};
