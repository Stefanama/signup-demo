'use strict';
/**
 * @ngdoc function
 * @name signupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the signupApp
 */
angular.module('signupApp').controller('SignUpCtrl', function ($scope, $http) {
    $scope.send = function () {
        alert();
        return true;
    }
});