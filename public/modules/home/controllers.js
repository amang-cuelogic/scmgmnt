'use strict';

//angular.module('Home')
angular.module('Authentication')
.controller('HomeController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
    	var userDetails = AuthenticationService.GetDetails();//console.log(userDetails);
    	$scope.loginUser = userDetails.currentUser.username;
    	$scope.message = 'Login Successfull';
    }]);