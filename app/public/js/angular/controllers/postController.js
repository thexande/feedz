  angular.module('feedz.postController', [])
  .controller('postController', function(getFeedById, $scope, $mdDialog, $log, userFactory, $state) {
    console.log(getFeedById)
    $scope.feed = getFeedById.data
    console.log("in post controller")
  })
