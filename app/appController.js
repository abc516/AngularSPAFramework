/**
 * Created by anton on 11/12/16.
 */
"use strict"

angular.module('app').controller('appController',
    ['$scope',
        function ($scope) {
            $scope.state = 'unauthorized';
            $scope.signIn = function () {
                $scope.state = 'authorized';
            };
        }
    ]);