

//Create a database of lesson plans for a day that include subjects and corressponding activites for music, art, stories, gross motor activities, and fine motor activities for preschoolers
//Edit, save, or delete existing lesson plan subjects and/or corresponding activities for each subject
//Add new lesson plan subjects and corresponding activitiess to the existing lesson plan to add to the curriculum
//Create a dropbox menu with a list of lesson plan subjects and activities to choose from in each category that is consistantly added to the database to click on and select once they have been saved to the database and the ability to add new ones to the dropbox menu

'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

require('./database');
require('./seed');

app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);

app.listen(3000, function() {
	console.log("The frontend server is running on port 3000!");
});