'use strict';

var mongoose = require('mongoose');

// plan.name
// plan.completed


//Update this planSchema to have properties that a lesson plan would have.  
var planSchema = new mongoose.Schema({
     name: String,
	 plan: String 
});

var model = mongoose.model('Plan', planSchema);

module.exports = model;
