'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('Sclass', []);

angular.module('BasicHttpAuthExample', [
    'Authentication',
    'Home',
    'Sclass',
    'ngRoute',
    'ngCookies'
])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
    .when('/login', {
        controller: 'LoginController',
        templateUrl: 'modules/authentication/views/login.html',
        hideMenus: true
    })

    .when('/', {
        controller: 'HomeController',
        templateUrl: 'modules/home/views/home.html'
    })

    .when('/logout', {
        controller: 'LogoutController',
        templateUrl: 'modules/authentication/views/login.html',
        hideMenus: true
    })

    .when('/sclass', {
        controller: 'SclassController',
        templateUrl: 'modules/sclass/views/sclass.html'
    })

    .otherwise({ redirectTo: '/login' });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',function ($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in
        if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
            $location.path('/login');
        }
    });
}]);