  angular.module('feedz.subFeedModalController', [])
    .controller('feedz.subFeedModalController', ($scope, $mdDialog, userFactory, localStorageFactory, subFeedFactory) => {
      $scope.createNewSubFeed = function() {
        var userData = localStorageFactory.getFromLocalStorage('user_data')
        subFeedFactory.createSubFeed($scope.subfeed, userData).then((subFeedResponse) => {
          
          console.log(subFeedResponse)
          $mdDialog.cancel()
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