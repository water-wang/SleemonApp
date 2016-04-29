var app = angular.module('app');

app.controller('User', function ($scope, $http, $routeParams) {
    $scope.wechatId = $routeParams.wechatId;
    
    $http.get('/user/:wechatid', { wechatid : 1 }).
        sucess(function (result) {
            $scope.state = 'sucess';
        }).error(function (error) {
            $scope.state = 'error';
        });        
})