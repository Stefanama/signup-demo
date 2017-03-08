'use strict';
/**
 * @ngdoc overview
 * @name signupApp
 * @description
 * # signupApp
 *
 * Main module of the application.
 */
angular.module('signupApp', [
    'ngAnimate'
    , 'ngCookies'
    , 'ngResource'
    , 'ui.router'
    , 'ngSanitize'
    , 'ngTouch'
  ]).config(function ($stateProvider, $locationProvider) {
    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    $stateProvider.state({
        name: 'main'
        , url: '/'
        , templateUrl: 'views/main.html'
    })
    
    $stateProvider.state({
        name: 'signup'
        , url: '/signup'
        , controller: 'SignUpCtrl'
        , templateUrl: 'views/signup.html'
    })
    
    $stateProvider.state({
        name: 'signup.getStarted'
        , controller: 'SignUpCtrl'
        , templateUrl: 'views/signup.getStarted.html'
    })
    $stateProvider.state({
        name: 'signup.aboutYou'
        , templateUrl: 'views/signup.aboutYou.html'
    })
});