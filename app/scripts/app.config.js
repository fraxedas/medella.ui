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

    .state('profile', {
      url: '/profile',
      templateUrl: '/views/profile.html'
    });
});
