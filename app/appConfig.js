/**
 * Created by anton on 10/29/16.
 */
angular.module('app').config(function ($provide) {
    $provide.decorator(("$exceptionHandler", ["$delegate", function ($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause)
        }
    }]))
})