var app = angular.module('app');

app.controller('User', function ($scope, $http, $routeParams) {
    $scope.wechatid = $routeParams.wechatid;

    var wechatid = 123;
    $http.get('/user/' + wechatid)
        .success(function (result) {
            $scope.state = result;
        }).error(function (error) {
            $scope.state = error;
        });        
});