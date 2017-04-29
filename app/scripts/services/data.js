'use strict';

function DataService ($http, $q) {

  this.getPlans = function(cb) {
    $http.get('/api/plans').then(cb);
  };

  this.deletePlan = function(plan) {
    if (!plan._id) {
      return $q.resolve();
    }
    return $http.delete('/api/plans/' + plan._id).then(function() {
      console.log("I deleted the " + plan.name + " plan!");
    });
  };

  this.savePlans = function(plans) {
    var queue = [];
    plans.forEach(function(plan) {
      var request;
      if(!plan._id) {
        request = $http.post('/api/plans', plan);
      } else {
        request = $http.put('/api/plans/' + plan._id, plan).then(function(result) {
          plan = result.data.plan;
          return plan;
        });
      }
      queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      console.log("I saved " + plans.length + " plans!");
    });
  };

}

module.exports = DataService;