webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('lessonPlanApp', ["xeditable"]);

	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(7);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('lessonPlanApp').service('dataService', __webpack_require__(4));

/***/ },
/* 4 */
/***/ function(module, exports) {

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
	        })
	      };
	      queue.push(request);
	    });
	    return $q.all(queue).then(function(results) {
	      console.log("I saved " + plans.length + " plans!");
	    });
	  };

	}

	module.exports = DataService;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('lessonPlanApp').directive('plan', __webpack_require__(6));

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	function PlanDirective () {
	  return {
	    templateUrl: 'public/index.html',
	    replace: true,
	    controller: 'planCtrl'
	  }
	}

	module.exports = PlanDirective;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('lessonPlanApp').controller('MainCtrl', __webpack_require__(8));
	angular.module('lessonPlanApp').controller('PlanCtrl', __webpack_require__(9));







/***/ },
/* 8 */
/***/ function(module, exports) {

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


/***/ },
/* 9 */
/***/ function(module, exports) {

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

	    // dataService.savePlans(filteredPlans)
	      // .finally($scope.resetPlanState());
	  // }

	module.exports = PlanCtrl;






/***/ }
]);