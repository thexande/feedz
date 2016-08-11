  angular.module('feedz.loginController', [])
 .controller('loginController', function($scope, userFactory) {
    $scope.login = function() {
      console.log($scope.user)
      userFactory.userLogin($scope.user).then((userLoginStatus) => {
        console.log(userLoginStatus)
      })
    }  
  })