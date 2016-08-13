  angular.module('feedz.subFeedModalController', [])
    .controller('feedz.subFeedModalController', ($scope, $mdDialog, userFactory, localStorageFactory, subFeedFactory) => {
      this.parent = $scope
      $scope.createNewSubFeed = function() {
        var userData = localStorageFactory.getFromLocalStorage('user_data')
        $mdDialog.cancel()
         subFeedFactory.createSubFeed($scope.subfeed, userData)
        
      }
      $scope.ok = function () {
        var userData = localStorageFactory.getFromLocalStorage('user_data')
        subFeedFactory.createSubFeed($scope.subfeed, userData).then((resp) => {
          $mdDialog.hide(resp);
        })
        
        
      };
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