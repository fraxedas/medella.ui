'use strict';

angular.module('medellauiApp')
  .service('alert', function ($rootScope, $timeout) {
    var alertTimeout;

    return function (type, tittle, message, timeout) {
      $rootScope.alert = {
        hasBeenShown: true,
        show: true,
        type: type,
        message: message,
        tittle: tittle
      };
      $timeout.cancel(alertTimeout);
      alertTimeout = $timeout(function () {
        $rootScope.alert.show = false;
      }, timeout || 2000);
    };
  });
