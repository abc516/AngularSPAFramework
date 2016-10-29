/**
 * Created by anton on 10/29/16.
 */

angular.module("psFramework").directive("psFramework", function () {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller: "psFrameworkController",
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html"
    };
});