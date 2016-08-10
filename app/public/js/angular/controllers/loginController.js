  angular.module('feedz.loginController', [])
 .controller('loginController', function($scope, $mdDialog, $log, userFactory) {
    $scope.cancel = function() {
      $mdDialog.hide();
    };
    $scope.login = function() {
      userFactory.userLogin($scope.user).then((userLoginStatus) => {
        console.log(userLoginStatus)
      })
      $log.debug("login()...");
      $mdDialog.hide();
    };
    $scope.user = {
      company: 'Google, Inc.',
      email: 'ThomasBurleson@Gmail.com',
      phone: ''
    };
        $scope.showRegister = function() {

        $mdDialog.show({
        controller: 'registerController',
        templateUrl: '/build/registerModal.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true
      });      
    }  
  })