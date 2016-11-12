angular.module('psDashboard').run(['$templateCache', function($templateCache) {$templateCache.put('ext-modules/psDashboard/psDashboardTemplate.html','\r\n<div class="ps-dashboard-header">\r\n    {{ title }}\r\n    <div class="ps-dashboard-controls">\r\n\r\n        <div class="dropdown">\r\n            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">\r\n                <i class="fa fa-plus"></i>\r\n                Add Widget\r\n                <span class="caret"></span>\r\n            </button>\r\n            <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">\r\n                <li ng-repeat="widget in widgetDefinitions">\r\n                    <a role="menuitem" ng-click="addNewWidget(widget)">{{widget.title}}</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div gridster="gridsterOpts">\r\n    <ul>\r\n        <li gridster-item="item" ng-repeat="item in widgets">\r\n            <ps-widget-body>\r\n            </ps-widget-body>\r\n        </li>\r\n    </ul>\r\n</div>');
$templateCache.put('ext-modules/psDashboard/psWidgetBodyTemplate.html','<div class="ps-widget-body">\r\n    <div class="ps-widget-menu-area btn-group">\r\n        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\r\n            <i class="fa fa-bars" ng-click="iconClicked()" />\r\n        </a>\r\n\r\n        <ul class="dropdown-menu" role="menu">\r\n            <li ng-click="close()"><i class="fa fa-2x fa-close" ng-click="iconClicked()" /></li>\r\n            <li ng-click="settings()"><i class="fa fa-2x fa-gear" ng-click="iconClicked()" /></li>\r\n        </ul>\r\n    </div>\r\n</div>');}]);