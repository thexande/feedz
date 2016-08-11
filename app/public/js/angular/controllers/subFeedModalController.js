  angular.module('feedz.subFeedModalController', [])
    .controller('feedz.subFeedModalController', ($scope, $mdDialog, userFactory, subFeedController) => {
      $scope.createNewSubFeed = function() {
        // console.log($scope.subfeed)
        console.log("woot")
      }
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
        console.log("cancel")
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
        console.log("answer")
      };
    })
    