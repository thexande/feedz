  angular.module('feedz.postModalController', [])
    .controller('feedz.postModalController', ($scope, $mdDialog, userFactory, localStorageFactory, subFeedFactory, postFactory, subfeeds) => {

      $scope.subfeeds = subfeeds
      $scope.createNewPost = function() {
        var userData = localStorageFactory.getFromLocalStorage('user_data')
        postFactory.createPost($scope.post, userData).then((PostResponse) => {
          console.log(PostResponse)
          $mdDialog.cancel()
        })
      }
      $scope.ok = function () {
        var userData = localStorageFactory.getFromLocalStorage('user_data')
        postFactory.createPost($scope.post, userData).then((PostResponse) => {
           $mdDialog.hide(PostResponse);
        })         
      }

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