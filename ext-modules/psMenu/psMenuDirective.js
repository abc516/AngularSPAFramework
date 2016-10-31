/**
 * Created by anton on 10/30/16.
 */
angular.module('psMenu').directive('psMenu', function () {
    return {

        scope: {

        },
        transclude: true,
        templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
        controller: 'psMenuController',
        link: function (scope, el, attr) {

        }
    }
})