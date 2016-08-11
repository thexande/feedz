  angular.module('feedz.loginController', [])
 .controller('loginController', function($scope, userFactory, $state) {
    $scope.login = function() {
      console.log($scope.user)
      userFactory.userLogin($scope.user).then((userLoginStatus) => {
        console.log(userLoginStatus)
        if(userLoginStatus.status === 200){
          $state.go('dash.home')
        } else {
          console.log("wrong password")
        }
      })
    }  
  })