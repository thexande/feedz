  angular.module('feedz.showPostController', [])
  .controller('showPostController', function(getPostById, getPost, $scope, $mdDialog, $log, userFactory, $state) {
    console.log(getPostById)
    console.log(getPost)


    $scope.feedName = getPost.feed_name.feed_name
    $scope.postComments = getPostById.data.rows
    console.log("in show post controller")
  })
