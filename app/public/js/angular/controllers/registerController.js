  angular.module('feedz.registerController', [])
  .controller('registerController', function($scope, $mdDialog, $log, userFactory) {
    $scope.registerSubmit = () => {
      userFactory.registerUser($scope.newUser).then((user) => {
        console.log(user)
      })
    }
  
  })
