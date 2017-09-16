'use strict';

var express = require('express');
var Plan = require('../models/plan');

var router = express.Router();


router.get('/plans', function(req, res) {
	Plan.find({}, function(err, plans) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ plans: plans });
  });
});

router.post('/plans', function(req, res) {
  var plan = req.body;
	Plan.create(plans, function(err, plan) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'plan': plan, message: 'Plan Created' });
  });
});

router.put('/plans/:id', function(req, res) {
  var id = req.params.id;
  var plan = req.body;
  if (plan && plan._id !== id) {
    return res.status(500).json({ err: "Ids don't match!" });
  }
  Plan.findByIdAndUpdate(id, plan, {new: true}, function(err, lesson) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'plan': plan, message: 'Plan Updated' });
  });
});

router.delete('/plans/:id', function(req, res) {
  var planId = req.params.id;
  Plan.findByIdAndRemove(planId, function(err, result) {
    if (err) {
		res.status(500).json({ err: err.message });
    } else {
		res.json({ message: 'Plan Deleted' });
	 }
  });
});

module.exports = router;