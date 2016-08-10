  angular.module('feedz.registerController', [])
  .controller('registerController', function($scope, $mdDialog, $log) {
    $scope.cancel = function() {
      $mdDialog.hide();
    };
    $scope.register = function() {
      $log.debug("register()...");
      $mdDialog.hide();
    };
    $scope.user = {
      company: 'Google, Inc.',
      email: 'ThomasBurleson@Gmail.com',
      phone: ''
    };
  })
