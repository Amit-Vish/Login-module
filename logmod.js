angular.module('logmod', [])
  .service('loginModal', function ($modal, $rootScope,$q) {
    function assignCurrentUser(user) {
      $rootScope.currentUser = user;
      return user;
    }

    return function (options) {
      var instance = $modal.open(options);
      return instance.result.then(assignCurrentUser);
    };

  })
  .run(function ($rootScope, $state, loginModal) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      if (toState.data.requireLogin && typeof $rootScope.currentUser === 'undefined') {
        event.preventDefault();
        loginModal($rootScope.modalOption)
        .then(function (val) {
          return $state.go(toState.name, toParams);
        })
        .catch(function (val) {
          return $state.go($rootScope.defaultPage);
        });
      }
    });
  })
  
.config(function ($httpProvider, $locationProvider) {
  $httpProvider.interceptors.push(function ($timeout, $q, $injector) {
    var loginModal, $http, $state;

    $timeout(function () {
      loginModal = $injector.get('loginModal');
      $http = $injector.get('$http');
      $state = $injector.get('$state');
    });

    return {
      'responseError': function (rejection) {
        if (rejection.status !== 401) {
          return rejection;
        }

        var deferred = $q.defer();

        loginModal($rootScope.modalOption)
          .then(function () {
            deferred.resolve($http(rejection.config));
          })
          .catch(function () {
            $state.go($rootScope.defaultPage);
            deferred.reject(rejection);
          });

        return deferred.promise;
      },
      'request': function (config) {
        return config;
      }

    };
  });
});
