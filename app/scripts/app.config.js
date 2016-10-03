'use strict';

/**
 * @ngdoc overview
 * @name medellauiApp
 * @description
 * # medellauiApp
 *
 * Main module of the application.
 */
angular.module('medellauiApp').config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  
  $stateProvider

    .state('main', {
      url: '/',
      templateUrl: '/views/main.html'
    })

    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl'
    });
});
