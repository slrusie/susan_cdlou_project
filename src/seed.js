'use strict';

var Plan = require('./models/plan');

var Plans = [
	{"name": "MUSIC", "plan": "A Peanut Sitting On A Railroad Track"},
    {"name": "ART", "plan": "Painting"},
	{"name": "STORIES", "plan": "Where The Wild Things Are"},
	{"name": "FINE MOTOR ACTIVITIES", "plan": "Blocks"},
	{"name": "GROSS MOTOR ACTIVITIES", "plan": "Dancing"},	
];

Plans.forEach(function (plan, index) {
  Plan.find({ 'name': plan.name }, function(err, plans) {
  	if (!err && !plans.length) {
      Plan.create(plan);
  	}
  });
});
