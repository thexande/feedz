  angular.module('feedz.postController', [])
  .controller('postController', function(getFeedById, getFeed, $scope, $mdDialog, $log, userFactory, $state, localStorageFactory) {
    console.log(getFeedById)
    $scope.feedPristine = getFeedById.data
    $scope.feed = getFeedById.data
    $scope.feeds = getFeedById.data.posts
    // $scope.feedColumnLength = $scope.feed.posts.length / 3
    console.log($scope.feedColumnLength)
    $scope.feedColumns = []
    console.log($scope.feed.posts)    


    
      // while($scope.feed.posts.length) {
      //   $scope.feedColumns.push($scope.feed.posts.splice(0, $scope.feedColumnLength))
      // }
      // console.log($scope.feedColumns)
      // if($scope.feedColumns.length === 4){
      //   $scope.feedColumns[3].forEach((val, key) => {
      //     $scope.feedColumns[ Math.floor(Math.random() * (2 - 0 + 1)) + 0].push(val)
      //   })
      //   $scope.feedColumns.pop()
      // }
      // $scope.feeds = [].concat.apply([], $scope.feedColumns)
      // console.log($scope.feeds)

    
    $scope.loadPost = (post_id) => {
      $state.go('dash.showPost', { feed_name: getFeed, post_id })
    }

    $scope.showAddSubFeed = function(ev) {
      $mdDialog.show({
          controller: 'feedz.subFeedModalController',
          templateUrl: '/build/addSubFeedModal.html',
          targetEvent: ev,
        })
    }
    $scope.showAddPost = function(ev) {
      $mdDialog.show({
          controller: 'feedz.postModalController',
          templateUrl: '/build/addPostModal.html',
          locals: {
            subfeeds: $scope.subFeeds
          },
          targetEvent: ev,
        }).then((postResp) => console.log(postResp))
    }

    $scope.showAddComment = function(ev) {
      $mdDialog.show({
          controller: 'feedz.commentModalController',
          templateUrl: '/build/addCommentModal.html',
          // locals: {
          //   subfeeds: $scope.subFeeds
          // },
          targetEvent: ev,
        })
    }
  })
