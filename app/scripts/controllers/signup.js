'use strict';
/**
 * @ngdoc function
 * @name signupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the signupApp
 */
angular.module('signupApp').controller('SignUpCtrl', function ($scope, $http, $state, CompaniesService) {

    $scope.company=CompaniesService.company;
    $scope.createCompany=CompaniesService.createCompany;
    $scope.moveToNextStep=function(step, form){
        $state.go(step);
    }
});