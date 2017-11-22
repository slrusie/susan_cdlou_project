'use strict';

function MainCtrl ($scope, dataService) {	

  dataService.getPlans(function(response){
    var plans = response.data.plans;
    $scope.plans =  plans;
	});
 
  // remove plan
  $scope.removePlan = function(index) {
    $scope.plans.splice(index, 1);
  };

  // add new plan
 $scope.addPlan = function() {
$scope.plans.unshift({name: "This is a new plan.", plan: "This is a new plan",
                      completed: false});
  };

}
		module.exports = MainCtrl;