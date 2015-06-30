"use strict";

angular.module('app').config(['$routeProvider','$locationProvider',
function ($routeProvider,$locationProvider) {
    var routes = [ //fleksibilniji routing .
    
        {
            url: '/dashboard',
            config: {
                template: '<wwa-dashboard><wwa-dashboard>',
                controller: 'appController'
                
                
            }
        },
         {
             url: '/locations',
             config: {
                 template: '<wwa-locations></wwa-locations>'
             }
         },
          {
              url: '/guides',
              config: {
                  template: '<wwa-guides></wwa-guides>'
              }
          },

    ];

    routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config);
    });
    $routeProvider.otherwise({ redirectTo: '/dashboard' });
   
}]);