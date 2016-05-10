var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/post', {
            controller : 'Post',
            templateUrl : 'views/post.html'
        })
        .when('/task', {
            controller : 'Task',
            templateUrl : 'views/task.html'
        })
        .when('/training', {
            controller : 'Training',
            templateUrl : 'views/training.html'
        })
         .when('/user', {
            controller : 'User',
            templateUrl : 'views/user.html'
        })
});