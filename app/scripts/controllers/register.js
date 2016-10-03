'use strict';

/**
 * @ngdoc function
 * @name medellauiApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the medellauiApp
 */
angular.module('medellauiApp')
  .controller('RegisterCtrl', function ($scope) {
    $scope.submit = function () {
      console.log("submit");
    };
  });
