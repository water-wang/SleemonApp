var app = angular.module('app');

app.controller('User', function ($scope, $http, $routeParams) {
    $scope.wechatid = $routeParams.wechatid;

    // user info contains two parts:
    // 1. user info from webapi that return only belongs to sleemon app.
    // 2. user info from wechat api, which to render personal info.
    var wechatid = 123;
    $http.get('/user/' + wechatid)
        .success(function (result) {
            $scope.state = result;
        }).error(function (error) {
            $scope.state = error;
        });        
});