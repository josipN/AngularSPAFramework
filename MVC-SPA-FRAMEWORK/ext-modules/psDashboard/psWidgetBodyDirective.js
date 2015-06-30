"use strict";
angular.module('psDashboard').directive('psWidgetBody', //ovo inherita scope iz psdashboard directiva. a on inherita scope is WWA dashboarddirectiva
    ['$compile','$modal',
        function ($compile,$modal) {
            return {
                templateUrl: 'ext-modules/psDashboard/psWidgetBodyTemplate.html',
                link: function (scope, element, attrs) {
                    var newElement = angular.element(scope.item.template);//scope je iz psDashboardTemplate a njegova vrijednost .template je unutar wwaDashboarddirectiva
                    element.append(newElement);
                    $compile(newElement)(scope);
                    

                    scope.close = function () {
                        //inherita iz psDashboardDirective.js koji inherita iz wwaDashboardDirective.js
                        scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
                    };

                    scope.settings = function () {
                        var options = {
                            templateUrl: scope.item.widgetSettings.templateUrl,
                            controller: scope.item.widgetSettings.controller,
                            scope: scope

                        };
                        $modal.open(options);

                    };
                    scope.iconClicked = function () {
                        //mobile fix, function is used by ng-click in the template
                        //so that icon clicks arent intercepted by widgets                              

                    }

                }
            };
        }
    ]);