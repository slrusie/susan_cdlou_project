'use strict';

function MainCtrl($scope, $filter, $http, dataService) {
  dataService.getPlans(function(response){
    var plans = response.data.plans;
    $scope.plans =  plans;
  });
   
$scope.checkPlan = function(data, name) {
    if (name === plan.name, plan.plan && data !== plan.name, plan.plan) {
      return plan;
    }
  };
  $scope.savePlan = function(data, id) {
    return dataService.savePlans($scope.plans);
  };

  // remove plan
  $scope.removePlan = function(index) {
    $scope.plans.splice(index, 1);
  };


  $scope.addPlan = function() {
$scope.plans.unshift({name: "This is a new plan.", plan: "This is a new plan",
                      completed: false});
  };

}

module.exports = MainCtrl;
