/**
 * Created by anton on 10/30/16.
 */
angular.module('psMenu').directive('psMenuItem', function () {
    return {

        require: '^psMenu',
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {
            
            scope.isActive = function () {
                return el === ctrl.getActiveElement()
            };

            el.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function () {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                })
            })
        }
    }
})