(function (app) {
  app.run(function ($rootScope) {
    $rootScope.modalOption = {
      templateUrl: 'myModalContent.html',
      controller: 'LoginModalCtrl',
      controllerAs: 'LoginModalCtrl',

    };
    $rootScope.defaultPage = 'login';
  });
  app.config(function ($stateProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix = '!';
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: "welcome.html",
        data: {
          requireLogin: true
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: "login.html",
        // ...
        data: {
          requireLogin: false // this property will apply to all children of 'app'
        }
      })

  });
  app.controller('crudController', ['$scope', 'svc', function (scope, svc) {
    scope.name = 'amit';
    scope.addPopUp = function () {
      angular.element('.addPopup').show();
    };
    scope.closePopup = function () {
      angular.element('.addPopup').hide();
    };
    this.login = function () {
      svc.getResult().then(function () {
      });
    };
    
  }]);
  app.controller('LoginModalCtrl', ['$scope', 'svc', '$modalInstance', '$rootScope', function (scope, svc, modalInstance, $rootScope) {
    scope.name = 'hello';
    scope.ok = function () {
      modalInstance.close('something');
    };

    scope.cancel = function () {
      modalInstance.dismiss('cancel');
    };
  }]);


}(window.app))


