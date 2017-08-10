'use strict';

var Plan = require('./models/plan');

var Plans = [
	{"name": "MUSIC", "plan": "A Peanut Sitting on a Railroad Track"},
    {"name": "ART", "plan": "Painting"},
	{"name": "STORIES", "plan": "Where The Wild Things Are"},
	{"name": "FINE MOTOR ACTIVITIES", "plan": "Blocks"},
	{"name": "GROSS MOTOR ACTIVITIES", "plan": "Dancing"},
	{"name": "History", "plan": "Music History"}
	
];

Plans.forEach(function (plan, index) {
  Plan.find({ 'name': plan.name }, function(err, plans) {
  	if (!err && !plans.length) {
      Plan.create(plan);
  	}
  });
});