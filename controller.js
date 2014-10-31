var app = angular.module('app',[]);
app.controller('crudController', function ($scope) {
    $scope.name = 'amit';
    $scope.addPopUp = function () {
        angular.element('.addPopup').show();
    };
    $scope.closePopup = function () {
        angular.element('.addPopup').hide();
    };
});