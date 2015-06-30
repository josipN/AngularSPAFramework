"use strict";

angular.module('psMenu').directive('psMenuItem', function () {
    return {

        require: '^psMenu', //uvik mora imati parenta psMenu i tako  dobije njegov controller

        scope: {
            label:'@', //ovaj znak povuce label item i postavi ga u naš scope label
            icon: '@',
            route:'@'
        },

        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',

       
        link: function (scope, el, attr, ctrl) {
            scope.isActive = function () { //ctrl gleda ^psMenuController
                return el === ctrl.getActiveElement();

            };

            scope.isVertical = function () { 
                return ctrl.isVertical() || el.parents('.ps-subitem-section').length >0;
                                            //ako roditelj našeg elementa ima ovu klasu ako klasa postoji automatski je >lenght je veći od 0 i onda ga prikazemo verticalno .ps-subitem-section se nalazi u psMenuGroupTemplate
            };

            el.on('click', function (evt) { //svrha ovoga je da posaljemo poruku van psMenua
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function () {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route); //route je atribut 
                });
            });
        }
    };
})