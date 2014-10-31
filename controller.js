var app = angular.module('app',[]);
app.controller('crudController',['$scope','svc', function (scope,svc) {
    scope.name = 'amit';
    scope.addPopUp = function () {
        angular.element('.addPopup').show();
    };
    scope.closePopup = function () {
        angular.element('.addPopup').hide();
    };
    svc.getResult().then(function () {
        debugger;
    });
}]);