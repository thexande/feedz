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
    localStorageFactory,
    karmaFactory) {
    // subfeeds for dropdown
    $scope.localSubFeed = localStorageFactory.getFromLocalStorage('subfeed')
    if(getFeedById){
      $scope.subFeeds = subfeeds.data
      $scope.feedData = getFeedById.data
      $scope.feed = getFeedById.data
      
    } else {
      $scope.feed = $scope.localSubFeed.data
    }
   
    console.log($scope.feedData)
    console.log("local storage here", localStorageFactory.getFromLocalStorage('subfeed'))
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
      karmaFactory.upVote(post_id).then((resp) => {console.log(resp)})
    }
    $scope.downVote = (post_id) => {
      console.log("downvote", post_id)
    }
  })
