'use strict';

/**
 * @ngdoc function
 * @name angularoauthexampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularoauthexampleApp
 */
angular.module('angularoauthexampleApp')
  .controller('AboutCtrl', function ($scope,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.root=$rootScope;
  });
