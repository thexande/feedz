  angular.module('feedz.postController', [])
  .controller('postController', function(
    subfeeds, 
    getFeedById, 
    getFeed, 
    $scope, 
    $mdDialog, 
    $log, 
    userFactory, 
    subFeedFactory,
    $state, 
    localStorageFactory) {
    // subfeeds for dropdown
    $scope.subFeeds = subfeeds.data
    $scope.feedPristine = getFeedById.data
    $scope.feed = getFeedById.data
    $scope.feeds = getFeedById.data.posts
    
    $scope.generateColumns = (feed) => {
      if(feed.length <= 3){
        console.log("less than 3")
      } else {
        $scope.feedColumns = []
        $scope.feedColumnLength = feed.length / 3
        while(feed.length) {
          $scope.feedColumns.push(feed.splice(0, $scope.feedColumnLength))
        }
        if($scope.feedColumns.length === 4){
          $scope.feedColumns[3].forEach((val, key) => {
            $scope.feedColumns[ Math.floor(Math.random() * (2 - 0 + 1)) + 0 ].push(val)
          })
          $scope.feedColumns.pop()
        }
      return [].concat.apply([], $scope.feedColumns)
      }
    }
    $scope.feeds = $scope.generateColumns($scope.feed.posts)
    console.log($scope.feeds)
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
        }).then((postResp) => {
          subFeedFactory.getPostsForFeed(getFeedById.data.id)
          .then((updatedFeed) => $scope.feeds = $scope.generateColumns(updatedFeed.data.posts))
        })
    }

    $scope.showAddComment = function(post) {
      $mdDialog.show({
          controller: 'feedz.commentModalController',
          templateUrl: '/build/addCommentModal.html',
          locals: { post },
        }).then((commentResponse) => {
          subFeedFactory.getPostsForFeed(getFeedById.data.id)
          .then((updatedFeed) => $scope.feeds = $scope.generateColumns(updatedFeed.data.posts))
        })
    }
    $scope.upVote = (post_id) => {
      console.log("upvote", post_id)
    }
    $scope.downVote = (post_id) => {
      console.log("downvote", post_id)
    }
  })
