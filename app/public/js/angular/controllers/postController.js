  angular.module('feedz.postController', [])
  .controller('postController', function(getFeedById, getFeed, $scope, $mdDialog, $log, userFactory, $state) {
    console.log(getFeedById)
    console.log(getFeed)
    $scope.feedName = getFeed.feed_name
    $scope.feed = getFeedById.data

    $scope.feedColumnLength = $scope.feed.length / 3
    $scope.feedColumns = []
    
    while($scope.feed.length) {
      $scope.feedColumns.push($scope.feed.splice(0, $scope.feedColumnLength))
    }
    if($scope.feedColumns.length === 4){
      $scope.feedColumns[3].forEach((val, key) => {
        console.log(val)
        $scope.feedColumns[ Math.floor(Math.random() * (2 - 0 + 1)) + 0].push(val)
      })
      $scope.feedColumns.pop()
    }
    console.log($scope.feedColumns)
    console.log("in post controller")
    $scope.loadPost = (post_id) => {
      $state.go('dash.showPost', { feed_name: getFeed, post_id })
    }
  })
