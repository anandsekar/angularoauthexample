'use strict';

/**
 * @ngdoc function
 * @name angularoauthexampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularoauthexampleApp
 */
angular.module('angularoauthexampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.login=function() {
    	var client_id="your client_id";
    	var scope="email";
    	var redirect_uri="http://localhost:9000";
    	var response_type="token";
    	var url="https://accounts.google.com/o/oauth2/auth?scope="+scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri+
    	"&response_type="+response_type;
    	window.location.replace(url);
    };
  });
