'use strict';

function MainCtrl($scope, dataService) {
  dataService.getPlans(function(response) {
    var plans = response.data.plans;
    $scope.plans = plans;
  });

  // remove plan
  $scope.removePlan = function(index) {
    $scope.plans.splice(index, 1);
  };

  // add new plan
  $scope.addPlan = function() {
    // line 43 of index.html drives whether or not the form is shown when you add a new plan, but what
    // it's referencing (inserted) didn't exist. I added it here and now the edit form shows when you
    // add a new plan
    $scope.inserted = {
      name: '',
      plans: [],
      selectedPlanIndex: 0,
      completed: false
    };

    $scope.plans.unshift($scope.inserted);
  };

  $scope.addPlanToSubject = function(planName, subject) {
    if (!subject.plans) subject.plans = [];
    subject.plans.push(planName);
    subject.selectedPlanIndex = subject.plans.indexOf(planName);
    document.querySelectorAll('#new-sub-plan').forEach(el => (el.value = null));
  };

  // this didn't exist yet. It will call savePlans whenever you click a save button on one of the rows
  $scope.savePlan = function(data, id) {
    dataService.savePlans($scope.plans);
  };
}
module.exports = MainCtrl;
