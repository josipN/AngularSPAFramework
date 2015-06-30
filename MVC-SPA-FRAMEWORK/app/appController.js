"use strict";

angular.module('app').controller('appController',
    ['$scope', 'dataService', '$rootScope', '$timeout',
function ($scope, dataService, $rootScope, $timeout) {

    $scope.state = "unauthorized";
    var name = { name: "Andy Chatterton", location: "Raquette River", image: "employee-andy.png" };



    $scope.signIn = function () {

        dataService.getEmployeeDb(name).then(

 function (result) {
     //on success
     $rootScope.user = result.data; //dobijamo json objekt

     $scope.state = "authorized";
 },
 function (result) {
     //on error
     alert("Not able to authorize: " + result)
 });
    }
}
    ]);