  angular.module('feedz.feedsController', [])
  .controller('feedsController',function($scope,$mdDialog, userFactory){
    console.log("in feeds controller")
    $scope.test = () => {
      console.log('wootwoot')
    }

  })