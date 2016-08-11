  angular.module('feedz.subFeedController', [])
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
    .controller('subFeedController', function($scope, $mdDialog, userFactory) {
      $scope.showAdd = function(ev) {
        $mdDialog.show({
            controller: 'feedz.subFeedModalController',
            templateUrl: '/build/addSubFeedModal.html',
            targetEvent: ev,
          })
          .then(function(answer) {
            $scope.alert = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.alert = 'You cancelled the dialog.';
          });
      }
    })