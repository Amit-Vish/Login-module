app.directive('add',['svc', function (svc) {
    return {
        restrict: 'E',
        templateUrl: '../partials/add-popup.html',
        link: function (scope, elem, attr) {
            debugger;
            scope.getResult = function () {
                debugger;
                svc.getResult().then(function () {
                    debugger;
                });
            };
        }
    }
}]);