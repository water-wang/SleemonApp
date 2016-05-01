var app = angular.module('app');

app.controller('User', function ($scope, $http, $routeParams) {
    $scope.wechatid = $routeParams.wechatid;

    $http.get('/user/:wechatid', { wechatid : 123 })
        .sucess(function (result) {
            $scope.state = result;
        }).error(function (error) {
            $scope.state = error;
        });        
});