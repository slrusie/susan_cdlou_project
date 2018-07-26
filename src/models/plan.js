
'use strict';



var mongoose = require('mongoose');



// plan.name

// plan.completed





//Update this planSchema to have properties that a lesson plan would have.

var planSchema = new mongoose.Schema({

     name: String,

     plans: [String], // plans is now an array of strings instead of one string so you can add many plans to it

     selectedPlanIndex: Number // selectedPlanIndex indicates which plan is currently selected so we can show it on the UI correctly

});



var model = mongoose.model('Plan', planSchema);



module.exports = model;
