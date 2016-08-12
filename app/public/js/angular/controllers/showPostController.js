  angular.module('feedz.showPostController', [])
  .controller('showPostController', function(getFeedById, getFeed, $scope, $mdDialog, $log, userFactory, $state) {
    console.log(getFeedById)
    console.log(getFeed)
    $scope.feedName = getFeed.feed_name
    $scope.feed = getFeedById.data
    console.log("in show post controller")
  })
