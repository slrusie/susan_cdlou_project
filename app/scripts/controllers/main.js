'use strict';

app.controller('EditableRowCtrl', function($scope, $filter, $http) {
 <table class="table table-bordered table-hover table-condensed">
    <tr style="font-weight: bold">
	<h1><td style="width=100%">LESSON PLAN</td>
      <td style="width:40%"></td>
      <td style="width:40%"></td>
      <td style="width:20%"></td>
    </tr>
    <tr ng-repeat="plan in plans">
      <td>
        <!-- editable username (text with validation) -->
        <span editable-text="plan.name" e-name="name" e-form="rowform">
          {{ plan.name || 'empty' }}
        </span>
      </td>
      <td>
        <!-- editable status (select-local) -->
        <span editable-select="plan.plan" e-name="plan" e-form="rowform">
          {{ showPlan(plan) }}
        </span>
      </td>
      <td>
      </td>
      <td style="white-space: nowrap">
        <!-- form -->
        <form editable-form name="rowform" onbeforesave="savePlan($data, user.id)" ng-show="rowform.$visible" class="form-buttons form-inline" shown="inserted == user">
          <button type="submit" ng-disabled="rowform.$waiting" class="btn btn-primary">
            save
          </button>
          <button type="button" ng-disabled="rowform.$waiting" ng-click="rowform.$cancel()" class="btn btn-default">
            cancel
          </button>
        </form>
        <div class="buttons" ng-show="!rowform.$visible">
          <button type="button" class="btn btn-primary" ng-click="rowform.$show()">edit</button>
          <button type="button" class="btn btn-danger" ng-click="removeUser($index)">del</button>
        </div>  
      </td>
    </tr>
  </table>

  <button type="button" class="btn btn-default" ng-click="addPlan()">Add row</button>
</div>

module.exports = MainCtrl;