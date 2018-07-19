'use strict';

function PlanCtrl($scope, dataService) {

  $scope.deletePlan = function (plan, index) {
    dataService.deletePlan(plan).then(function () {
      $scope.plans.splice(index, 1);
    });
  };

  $scope.savePlans = function () {
    var filteredPlans = $scope.plans.filter(function (plan) {
      if (plan.edited) {
        return plan
      };
    })
    dataService.savePlans(filteredPlans)
      .finally($scope.resetPlanState());
  };

  $scope.resetPlanState = function () {
    $scope.plans.forEach(function (plan) {
      plan.edited = false;
    });
  }
}

module.exports = PlanCtrl;