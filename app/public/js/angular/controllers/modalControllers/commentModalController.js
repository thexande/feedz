angular.module('feedz.commentModalController', [])
  .controller('feedz.commentModalController', (post, $scope, $mdDialog, userFactory, localStorageFactory, subFeedFactory, postFactory, commentFactory) => {
    $scope.post = post      
      $scope.ok = function () {
        commentFactory.creatComment($scope.comment, $scope.post).then((commentResponse) => {
           $mdDialog.hide(commentResponse);
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