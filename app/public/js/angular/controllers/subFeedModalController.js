  angular.module('feedz.subFeedModalController', [])
    .controller('feedz.subFeedModalController', ($scope, $mdDialog, userFactory) => {
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
    