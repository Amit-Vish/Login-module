app.factory('svc', function ($q,$http) {
    return {
        getResult: function () {
            var q = $q.defer();
            $http({
                method: 'GET',
                url: 'http://vm-stage-01.cloudapp.net:3000/modules',
                header: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }).success(function (res) {
                debugger;
                q.resolve(res);
            }).error(function (res) {
                debugger;
                q.reject();
            });
            return q.promise;
        }
    }
});