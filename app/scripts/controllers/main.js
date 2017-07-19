'use strict';

function MainCtrl($scope, $filter, $http, dataService) {
  dataService.getPlans(function(response){
    var plans = response.data.plans;
    $scope.plans =  plans;
  });
$scope.checkPlan = function(data, id) {
    if (id === plan.name, plan.plan && data !== plan.name, plan.plan) {
      return plan;
    }
  };
  $scope.savePlan = function(data, id) {
    //save plan
    angular.extend(data, {id: id});
    return $http.post('/savePlan', data);
  };

  // remove user
  $scope.removePlan = function(index) {
    $scope.plans.splice(index, 1);
  };


  $scope.addPlan = function() {
    $scope.plans.unshift({name: "This is a new plan.", plan: "This is a new plan",
                      completed: false});
  };

}

module.exports = MainCtrl;
