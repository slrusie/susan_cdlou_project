'use strict';

app.controller('EditableRowCtrl', function($scope, $filter, $http) {

$scope.plans = [
    {id: 1, name: '',  plan: ''},
    {id: 2, name: '',  plan: ''},
    {id: 3, name: '',  plan: ''},
    {id: 4, name: '',  plan: ''},
    {id: 5, name: '',  plan: ''}
  ]; 

$scope.checkPlan = function(data, id) {
	if (id === plan) {
      return plan.length;
    }
  };

 $scope.savePlan = function(data, id) {
    //$scope plan not updated yet
    angular.extend(data, {id: id});
    return $http.post('/savePlan', data);
  };

  // remove plan
  $scope.removePlan = function(index) {
    $scope.users.splice(index, 1);
  };

  // add plan
  $scope.addPlan = function() {
    $scope.inserted = {
      id: $scope.plan.length+1,
      name: '',
      plan: ''
    };
    $scope.plan.push($scope.inserted);
  };
});

    dataService.savePlans(filteredPlans)
      .finally($scope.resetPlanState());
  }

module.exports = PlanCtrl;
