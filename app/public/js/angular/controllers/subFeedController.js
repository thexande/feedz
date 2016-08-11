  angular.module('feedz.subFeedController', [])
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
    .controller('subFeedController', function($scope, $mdDialog, userFactory) {
      console.log("in feeds controller")
      $scope.createNewSubFeed = () => {
        // console.log($scope.subfeed)
        console.log("woot")
      }
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