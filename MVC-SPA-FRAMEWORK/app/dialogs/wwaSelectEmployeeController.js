"use strict";
angular.module('app').controller('wwaSelectEmployeeController',
    ['$scope', 'dataService',
        function ($scope, dataService) {
            $scope.isLoaded = false;
            dataService.getEmployees().then(function (success) {
                $scope.employees = success;
                $scope.isLoaded = true;


                for (var i = 0; i < success.length; i++) {
                    if (success[i].id == $scope.item.widgetSettings.id)
                        $scope.selectedEmployee = success[i];

                }
            });

            $scope.saveSettings = function () {
                //$scope.item.widgetSettings.id = $scope.selectedEmployee.id;
                $scope.$parent.selectedEmployee = $scope.selectedEmployee;
                       //UI bootstrap nešto
                $scope.$close();
            }

        }
    ]);