"use strict";
angular.module('psDashboard').directive('psDashboard', function () {
    //scope se inherita tako da ništa nenapišemo XD inherita psdashboarddirective
return {
    templateUrl: 'ext-modules/psDashboard/psDashboardTemplate.html',
    link: function (scope, element, attrs) {
        scope.addNewWidget = function (widget) {
            var newWidget = angular.copy(widget.settings);
            scope.widgets.push(newWidget);
        };
    }
};
});