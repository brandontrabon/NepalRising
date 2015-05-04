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
    
     $routeProvider.when('/austin', {
        templateUrl: 'views/cities/austin.html',
        controller: 'contactController'
    });
    
     $routeProvider.when('/dc', {
        templateUrl: 'views/cities/dc.html',
        controller: 'contactController'
    });
    
     $routeProvider.when('/chicago', {
        templateUrl: 'views/cities/chicago.html',
        controller: 'contactController'
    });
    
     $routeProvider.when('/dallas', {
        templateUrl: 'views/cities/dallas.html',
        controller: 'contactController'
    });
    
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);