  angular.module('feedz.appController', [])

  .controller('appController',function($scope,$mdDialog, userFactory){
    $scope.showLogin = function() {
        $mdDialog.show({
        controller: 'loginController',
        templateUrl: '/build/loginModal.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true
      });      
    }  

  })