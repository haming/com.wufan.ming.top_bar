'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('publicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  //.config(function ($routeProvider) {
  //  $routeProvider
  //    .when('/', {
  //      templateUrl: 'views/side_top.html',
  //      controller: 'MainCtrl',
  //      controllerAs: 'main'
  //    })
  //    .when('/about', {
  //      templateUrl: 'views/about.html',
  //      controller: 'AboutCtrl',
  //      controllerAs: 'about'
  //    })
  //    .otherwise({
  //      redirectTo: '/'
  //    });
  //});
