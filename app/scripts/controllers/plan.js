'use strict';

function PlanCtrl ($scope, dataService) {

$scope.deletePlan = function(plan, index) {
    dataService.deleteTodo(todo).then(function() {
      $scope.todos.splice(index, 1);
    });
  }:

  $scope.savePlans = function() {
    var filteredPlans = $scope.plans.filter(function(plan){
      if(plan.edited) {
        return plan
      };
    })
    dataService.savePlans(filteredPlans)
      .finally($scope.resetPlanState());
  };

  $scope.resetPlanState = function() {
      $scope.plans.forEach(function(plan) {
         plan.edited = false;
      });
  }
}


module.exports = PlanCtrl;





