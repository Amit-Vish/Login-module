var app = angular.module('app', ['ui.bootstrap']);
function controller($scope,$http) {
    $scope.name = 'name';
    $scope.open = function () {
        $http({
            method: 'GET',
            url: 'http://vm-stage-01.cloudapp.net:3000/modules',
            
            header: {
                'content-type' : 'application/json;charset=utf-8'
            }
        }).success(function (res) {
            debugger;
        }).error(function (res) {
            debugger;
        });

        angular.element('.dud').show();
    };
};