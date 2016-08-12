  angular.module('feedz.commentModalController', [])
    .controller('feedz.commentModalController', ($scope, $mdDialog, userFactory, localStorageFactory, subFeedFactory, postFactory) => {

      // $scope.createNewPost = function() {
      //   var userData = localStorageFactory.getFromLocalStorage('user_data')
      //   postFactory.createPost($scope.post, userData).then((PostResponse) => {
      //     console.log(PostResponse)
      //     $mdDialog.cancel()
      //   })
      // }

      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    })