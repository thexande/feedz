  angular.module('feedz.loginController', [])
 .controller('loginController', function($scope, userFactory, localStorageFactory, $state) {
    $scope.login = function() {
      userFactory.userLogin($scope.user).then((userLoginStatus) => {
        localStorageFactory.setToLocalStorage('user_data', userLoginStatus.data.user)
          if(userLoginStatus.status === 200){
            $state.go('dash.home')
          } else {
            console.log("wrong password")
          }
      })
    }  
  })