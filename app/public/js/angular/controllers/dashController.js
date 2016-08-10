  angular.module('feedz.dashController', [])
  .controller('dashController',function($scope,$mdDialog, userFactory){
    $scope.test = () => {
      console.log('wootwoot')
    }
  })