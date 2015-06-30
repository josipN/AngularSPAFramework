"use strict";
angular.module('psMenu').controller('psMenuController',
    ['$scope','$rootScope',
        function ($scope, $rootScope) {
            $scope.showMenu = true;
            $scope.isVertical = true;
            $scope.openMenuScope = null;
            $scope.allowHorizontalToggle = true;

            //this koristimo kada link:function iz direktive POZIVA naš scope.getActiveElement
            this.getActiveElement = function () { 
                return $scope.activeElement;
            };
            this.setActiveElement = function (el) {
                $scope.activeElement = el;
            };

            this.setRoute = function (route) { 
                $rootScope.$broadcast('ps-menu-item-selected-event',
                    { route: route });
            };
           

            $scope.$on('ps-menu-show', function (evt, data) {
                $scope.showMenu = data.show;
                $scope.isVertical = data.isVertical;
                $scope.allowHorizontalToggle = data.allowHorizontalToggle;
            });



            $scope.toggleMenuOrientation = function () {

                if ($scope.openMenuScope)
                    $scope.openMenuScope.closeMenu();

                $scope.isVertical = !$scope.isVertical;

                $rootScope.$broadcast('ps-menu-orientation-changed-event',
                    {isMenuVertical: $scope.isVertical});
            };

            angular.element(document).bind('click', function (e) { //binda cili dokument na click event /ako kliknemo bilo di ovo ce se pokrenit.
                if ($scope.openMenuScope && !$scope.isVertical) {
                    if ($(e.target).parent().hasClass('ps-selectable-item')) //ako klikamo po meniu napravi ništa. inace ako kliknemo negdi drugo zatvori popup meni
                        return;
                    $scope.$apply(function () { //ako radimo sa jquery handlerom moramo $applyat promijene na scopu
                        $scope.openMenuScope.closeMenu();
                    });
                    e.preventDefault(); //click does not get passed to the open space outside of the popup menu 
                    e.stopPropagation();
                }
            });

            this.isVertical = function () {  //ovo je funkcija koju je pozvao psMenuItemDirective.js na liniji 23
                return $scope.isVertical;
            }

            this.setOpenMenuScope = function (scope) {
                $scope.openMenuScope = scope; //ovaj scope ako ga pozivamo uz pomoć THIS ima kontrolu nad funkcijama iz svog direktorija psMenuGroupDirective
            };
        }

    ]);