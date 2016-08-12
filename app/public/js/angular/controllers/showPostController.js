  angular.module('feedz.showPostController', [])
  .controller('showPostController', function(getPostById, getPost, $scope, $mdDialog, $log, userFactory, $state) {
    console.log(getPostById)
    console.log(getPost)


    $scope.postName = getPost.post_title
    $scope.postComments = getPostById.data
    console.log("in show post controller")
  })
