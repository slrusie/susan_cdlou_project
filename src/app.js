//Create a daily lesson plan 

//Add list items that include cirle time, art, gross motor activities, and fine motor activities for preschoolers

//Create a database with a list of items for each category to add to the blank lesson plan 
//Add "+" and "-" glyphs in blank spaces next to each category
//Show "+" and "-" glyhys when the mouse is hovering over the glyphs
//Hide "+" and "-" glyphs when moouse leaves the blank space the glyphs are in
//Click on "+" to create a dropbox with a list of activities to choose from in each category and the ability to add new ones to the dropbox
//Click on "-" to remove an item from the blank space 
//Be able to copy and paste items in the database into the appropriate spots on the blank lesson plan

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