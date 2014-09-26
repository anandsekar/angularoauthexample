'use strict';

/**
 * @ngdoc overview
 * @name angularoauthexampleApp
 * @description
 * # angularoauthexampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularoauthexampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/access_token=:accessToken', {
        template: '',
        controller: function ($location,$rootScope) {
          var hash = $location.path().substr(1);
          
          var splitted = hash.split('&');
          var params = {};

          for (var i = 0; i < splitted.length; i++) {
            var param  = splitted[i].split('=');
            var key    = param[0];
            var value  = param[1];
            params[key] = value;
            $rootScope.accesstoken=params;
          }
          $location.path("/about");
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
