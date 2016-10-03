'use strict';

/**
 * @ngdoc function
 * @name medellauiApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the medellauiApp
 */
angular.module('medellauiApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.submit = function () {
      
      var url = '/';
      var user = {};
      
      $http.post(url, user)
        .success(function (res) {
          console.log(res);
        })
        .error(function (error) {
            alert('warning', 'Opps!', 'Cloud not register');
        })
        ;
    };
  });
