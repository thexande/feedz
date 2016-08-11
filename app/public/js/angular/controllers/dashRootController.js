  angular.module('feedz.dashRootController', [])
  .controller('dashRootController',function($scope,$mdDialog, userFactory, localStorageFactory){
    // get user data for dashboard
    $scope.userData = localStorageFactory.getFromLocalStorage('user_data')
    console.log($scope.userData)
  })