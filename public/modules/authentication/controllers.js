'use strict';

angular.module('Authentication')

.controller('LoginController',
['$scope', '$rootScope', '$location', 'AuthenticationService',
function ($scope, $rootScope, $location, AuthenticationService) {
    var GetDetails = AuthenticationService.GetDetails();
    if(GetDetails== undefined){
        $scope.error = 'Please Login';
        // reset login status
        AuthenticationService.ClearCredentials();
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                if (response.message == 'success') {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    //console.log(GetDetails.currentUser.username)
                    if(GetDetails.currentUser.username!=null){
                        $location.path('/');
                    }else{
                        $location.path('/login');
                        $scope.error = 'Session Expired';
                    }
                    
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }else{
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                if (response.message == 'success') {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    var GetDetails = AuthenticationService.GetDetails();
                    if(GetDetails.currentUser.username!=null){
                        $location.path('/');
                    }else{
                        $location.path('/login');
                        $scope.error = 'Session Expired';
                    }                   
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };      
    }
}])

.controller('LogoutController',
['$scope', '$rootScope', '$location', 'AuthenticationService',
function ($scope, $rootScope, $location, AuthenticationService) {
    // reset login status
    AuthenticationService.ClearCredentials();
    $location.path('/login');
    $scope.message = 'Logged out successfully';
}]);