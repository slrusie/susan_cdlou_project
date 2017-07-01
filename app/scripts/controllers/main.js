'use strict';

function MainCtrl($scope, $filter, $http, dataService) {
  dataService.getPlans(function(response){
    var plans = response.data.plans;
    $scope.plans =  plans;
  });

  $scope.addPlan = function() {
    $scope.plans.unshift({name: "This is a new plan.", plan: "This is a new plan",
                      completed: false});
  };

}

module.exports = MainCtrl;
