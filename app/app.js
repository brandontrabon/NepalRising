var app = angular.module('napalRising', ['ngRoute', 'ngCookies', 'ui.bootstrap']);

app.config(['$routeProvider', function ($routeProvider) {
    
    // Main Pages
    
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
    
    // City Pages
    
    $routeProvider.when('/boston', {
        templateUrl: 'views/cities/boston.html',
        controller: 'contactController'
    });
    
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);