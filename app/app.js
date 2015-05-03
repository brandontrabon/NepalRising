var app = angular.module('napalRising', ['ngRoute', 'ngCookies']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/campaign', {
        templateUrl: 'views/campaign.html',
        controller: 'campaignController'
    });
    $routeProvider.when('/action', {
        templateUrl: 'views/action.html',
        controller: 'actionController'
    });
    $routeProvider.when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);