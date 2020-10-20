const express = require('express');
const bodyParser = require('body-parser');
const stdrouter = require('./routes/student');
const userRoutes = require('./routes/User');
const app = express();
/*to fetch the data in human readable form*/
app.use(bodyParser.urlencoded({ extended: false }));
/*EJS template being used*/
app.set('view engine', 'ejs');
/*to fetch all the css and image folders from public folder without writting the whole path*/
app.use(express.static('public'));
/*when ever url will start with /user , we will go to User.js inside routes*/
app.use('/user', userRoutes);
/*when ever url will start with / , we will go to student.js inside routes*/
app.use(stdrouter);
/*it will run on localhost:3000*/
app.listen(3000);
