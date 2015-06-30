angular.module("psMenu").run(["$templateCache", function($templateCache) {$templateCache.put("ext-modules/psMenu/psmenuGroupTemplate.html","<li class=\"ps-selectable-item \" ng-click=\"clicked()\" ng-class=\"{\'ps-item-horizontal\':!isVertical()}\">\r\n    <div class=\"ps-noselect\">\r\n        <i class=\"fa {{icon}} ps-menu-icon\"></i>\r\n        {{label}}\r\n        <i ng-if=\"isVertical()\" \r\n           class=\"fa fa-chevron-left ps-group-indicator-left\" \r\n           ng-class=\"{\'fa-rotate-270\' : isOpen}\"></i> <!--klasa se pozuiva samo ako je :is open true.--> <!--/prikazi ikonu samo ako je menu verticalan-->\r\n        \r\n     </div>\r\n\r\n</li>\r\n<div ng-show=\"isOpen\" class=\"ps-subitem-section ps-fade-in-animation\" \r\n     ng-class=\"{\'ps-popup-menu\':!isVertical()}\"> \r\n <ul ng-transclude></ul> <!--Translucde radi na način da prikaze u ovom slučaju naše iteme koji se nalaze unutar drugog templata. -->\r\n</div>\r\n");
$templateCache.put("ext-modules/psMenu/psMenuItemTemplate.html","<li class=\"ps-selectable-item\"  ng-class=\"{\'ps-item-horizontal\':!isVertical()}\">\r\n   <div class=\"ps-noselect\">\r\n    \r\n    <i class=\"fa {{icon}} ps-menu-icon\"></i>\r\n       {{label}}\r\n   <i ng-if=\"isActive() && isVertical()\"\r\n      class=\"fa fa-2x fa-caret-left ps-menu-active-indicator\" ></i>\r\n       \r\n       </div> \r\n    <!--Ikona se pokazuje ako je item aktivan i ako je item verticalan! -->\r\n</li>\r\n");
$templateCache.put("ext-modules/psMenu/psMenuTemplate.html","<div>\r\n \r\n    <ul class=\"ps-menu ps-noselect\" ng-transclude></ul>\r\n     <a class=\"btn ps-menu-layout-button\"\r\n       ng-show=\"allowHorizontalToggle\"\r\n       ng-class=\"{\'ps-layout-button-horizontal\':!isVertical}\"\r\n       ng-click=\"toggleMenuOrientation()\">\r\n        <i class=\"fa \"\r\n           ng-class=\"{\'fa-chevron-up\':isVertical, \'fa-chevron-left\':!isVertical}\">\r\n        </i>\r\n    </a>   \r\n</div>\r\n");}]);