"use strict";
angular.module("psFramework").controller("psFrameworkController",
    ['$scope', '$window', '$timeout', '$rootScope','$location',
        function ($scope,$window,$timeout,$rootScope,$location) {
            
            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;
            $scope.isMenuVertical = true;
         
            $scope.user = $rootScope.user;

            $scope.$on('ps-menu-orientation-changed-event', function (evt, data) {
                $scope.isMenuVertical = data.isMenuVertical;
            });

            $scope.$on('ps-menu-item-selected-event', function (evt, data) {
                $scope.routeString = data.route; //unutar data proslijeđuje se icon label i route.
                $location.path(data.route);
                checkWidth();
                brodcastMenuState();
            });
            //windows je service ali ga zovemo s $window radi tesiranja?
            //stvaramo jquery objket kojem on resize dodijeljujemo ime psFramework
            $($window).on('resize.psFramework', function () {
                $scope.$apply(function () {

                    //apply aplaja promjenu na scopu!
                    checkWidth();
                    brodcastMenuState();
                });
            });

            $scope.$on("$destroy", function () {
                $($windows).off("resize.psFramework");
            });

            var checkWidth = function () {
                var width = Math.max($($window).width(),$window.innerWidth);
                $scope.isMenuVisible = (width > 768);
                $scope.isMenuButtonVisible = !$scope.isMenuVisible;
            }

            $scope.menuButtonClicked = function () {
               
                    $scope.isMenuVisible = !$scope.isMenuVisible;
                    brodcastMenuState();//menu je dio frameworka ali triba broadcastati prema PSmenu.
                    //$scope.$apply();
                    // //applajamo promjene na scopu. LINIJA BACA ERROR ALI RADI I BEZ NJE.
             
                
            };

            var brodcastMenuState = function () {
                $rootScope.$broadcast('ps-menu-show', //broadcastamo od roota pa dolje ime broadcasta ps-menu-show
                    {
                        show: $scope.isMenuVisible,
                        isVertical: $scope.isMenuVertical,
                        allowHorizontalToggle: !$scope.isMenuButtonVisible
                    });
            };


            $timeout(function () { //servis koji zna da se scope mijenja. inac ebi tribali stavit $apply
                checkWidth();
            },0);
        }
    ]);