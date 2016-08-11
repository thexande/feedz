  angular.module('feedz.registerController', [])
  .controller('registerController', function($scope, $mdDialog, $log, userFactory) {
    $scope.registerSubmit = () => {
      console.log($scope.user)
      userFactory.registerUser($scope.user).then((user) => {
        console.log(user)
      })
    }
  })
