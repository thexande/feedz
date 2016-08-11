  angular.module('feedz.registerController', [])
  .controller('registerController', function($scope, $mdDialog, $log, userFactory, $state) {
    $scope.registerSubmit = () => {
      console.log($scope.user)
      userFactory.registerUser($scope.user).then((user) => {
        $state.go('login')
        console.log(user)
      })
    }
  })
