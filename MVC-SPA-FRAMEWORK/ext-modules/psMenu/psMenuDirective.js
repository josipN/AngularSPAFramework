"use strict";

angular.module('psMenu').directive('psMenu',['$timeout',
    function($timeout)
{
    return {


        scope: {

        },
       
        transclude: true,

        templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',

        controller: 'psMenuController',

        link: function (scome, el, attr) {
            var item = el.find('.ps-selectable-item:first');//uhvati prvi :first jquery. selectable item.
            $timeout(function () {  //uzet ga i trigerat nakon digest cycla  click digest procesira sve unutar našeg scopa 
                item.trigger('click');
            });

                
        }
    };
}])