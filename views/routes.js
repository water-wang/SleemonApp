var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/post', {
            controller : 'Post',
            templateUrl : 'post/index.html'
        })
        .when('/task', {
            controller : 'Task',
            templateUrl : 'task/index.html'
        })
        .when('/training', {
            controller : 'Training',
            templateUrl : 'training/index.html'
        })
         .when('/user', {
            controller : 'User',
            templateUrl : 'user/index.html'
        })
        .otherwise({
            redirectTo : '/user'
        });
});