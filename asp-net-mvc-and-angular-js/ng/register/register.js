var myApp = angular.module('myApp', [
    , 'ngRoute'
    , 'myControllers'
    , 'dataFactory'
]);


myApp.config(function ($routeProvider) {
    $routeProvider.
    when('/users', {
        templateUrl: '/ng/views/users-browse.html',
        controller: 'usersController'
    }).
    when('/users/:id', {
        templateUrl: '/ng/views/users-edit.html',
        controller: 'usersController'
    }).
    when('/other', {
        templateUrl: '/ng/views/other.html',
        controller: 'otherController'
    }).
    otherwise({
        redirectTo: '/'
    });
});