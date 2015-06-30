"use strict";
angular.module('app').controller('wwaSelectLocationController',
    ['$scope', 'dataService',
        function ($scope, dataService) {
            $scope.isLoaded = false;
            dataService.getLocations().then(function (data) {
                $scope.locations = data;
                $scope.isLoaded = true;


                for(var i = 0; i<data.length;i ++)
                {
                    if (data[i].id == $scope.item.widgetSettings.id)
                        $scope.selectedLocation = data[i];

                }
            });

            $scope.saveSettings = function () {
                //// $scope.item.widgetSettings.id = $scope.selectedLocation.id; //ja mislim da ovo nije potrebno.
                //linija bi tribala updejtat naš array... u slučaju bp triba upalit
                $scope.$parent.selectedLocation = $scope.selectedLocation;
                     //UI bootstrap nešto
                $scope.$close();
            }


        }
    ]);