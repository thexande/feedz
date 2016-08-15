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
    
     $scope.generateColumns = (arr, n) => {

        var rest = arr.length % n,
        restUsed = rest,
        partLength = Math.floor(arr.length / n),
        result = [];
    
    for(var i = 0; i < arr.length; i += partLength) {
        var end = partLength + i,
            add = false;
        
        if(rest !== 0 && restUsed) {
            end++;
            restUsed--;
            add = true;
        }
        
        result.push(arr.slice(i, end));
        
        if(add) {
            i++;
        }
    }
    
    return result;

      //   let feedColumns = []
      //   let feedColumnLength = feed.length / 3
      //   while(feed.length) {
      //     feedColumns.push(feed.splice(0, feedColumnLength))
      //     console.log(feedColumns)
      //   }
      //   if(feedColumns.length === 4){
      //     feedColumns[3].forEach((val, key) => {
      //       feedColumns[ Math.floor(Math.random() * (2 - 0 + 1)) + 0 ].push(val)
      //     })
      //     feedColumns.pop()
      //   }
      // let columnArr = []
      // // columnArr = feedColumns.concat.apply([], feedColumns)
      // // console.log(columnArr)
      // console.log(feedColumns)
      // return feedColumns

      
    }
    $scope.feeds = $scope.generateColumns($scope.feed.posts, 3)
    console.log($scope.feeds)
    console.log($scope.feedColumns)
    
  
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
          .then((updatedFeed) => $scope.feeds = $scope.generateColumns(updatedFeed.data.posts, 3))
        })
    }

    $scope.showAddComment = function(post) {
      $mdDialog.show({
          controller: 'feedz.commentModalController',
          templateUrl: '/build/addCommentModal.html',
          locals: { post },
        }).then((commentResponse) => {
          subFeedFactory.getPostsForFeed(getFeedById.data.id)
          .then((updatedFeed) => $scope.feeds = $scope.generateColumns(updatedFeed.data.posts, 3))
        })
    }
    $scope.upVote = (post_id) => {
      console.log("upvote", post_id)
    }
    $scope.downVote = (post_id) => {
      console.log("downvote", post_id)
    }
  })
