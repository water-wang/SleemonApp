var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/post', {
            controller : 'Post',
            templateUrl : 'post/post.html'
        })
        .when('/task', {
            controller : 'Task',
            templateUrl : 'task/task.html'
        })
        .when('/training', {
            controller : 'Training',
            templateUrl : 'training/training.html'
        })
         .when('/user', {
            controller : 'User',
            templateUrl : 'user/user.html'
        })
        .otherwise({
            redirectTo : '/user'
        });
});