'use strict';

function MainCtrl($scope, dataService) {

  dataService.getPlans(function (response) {
    var plans = response.data.plans;
    $scope.plans = plans;
  });

  // remove plan
  $scope.removePlan = function (index) {
    $scope.plans.splice(index, 1);
  };

  // add new plan
  $scope.addPlan = function () {
    $scope.plans.unshift({
      name: "This is a new plan.",
      plan: "This is a new plan",
      completed: false
    });
  };

  $scope.addPlanToSubject = function (plan, subject) {
    console.log(plan, subject);
    if (!subject.plans) subject.plans = [];
    subject.plans.push(plan);
    document.querySelectorAll('#new-sub-plan').forEach(el => el.value = null);
  }

}
module.exports = MainCtrl;