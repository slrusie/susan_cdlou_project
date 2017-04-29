'use strict';

function PlanDirective () {
  return {
    templateUrl: 'templates/plan.html',
    replace: true,
    controller: 'planCtrl'
  }
}

module.exports = PlanDirective;