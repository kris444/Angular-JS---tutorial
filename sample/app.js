
var appModule = angular.module('app', ['ngRoute']);

// //routing
appModule.config(function ($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: '/features/home/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: '/features/about/about.html',
            controller: 'AboutController'
        })
        .otherwise({ redirectTo: '/main' });
})