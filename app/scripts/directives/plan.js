'use strict';

function PlanDirective () {
  return {
    templateUrl: 'public/index.html',
    replace: true,
    controller: 'planCtrl'
  }
}

module.exports = PlanDirective;