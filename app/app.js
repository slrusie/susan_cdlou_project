'use strict';

var angular = require('angular');

var app = angular.module('lessonPlanApp', ["xeditable"]);
app.run(['editableOptions', function(editableOptions) {
    editableOptions.theme = 'bs3';
}]);

require('./scripts/services');
require('./scripts/directives');
require('./scripts/controllers');