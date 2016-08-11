  angular.module('feedz.subFeedController', [])
  .controller('subFeedController',function($scope,$mdDialog, userFactory){
    console.log("in feeds controller")
    $scope.createNewSubFeed = () => {
      // console.log($scope.subfeed)
      console.log("woot")
    }

  })