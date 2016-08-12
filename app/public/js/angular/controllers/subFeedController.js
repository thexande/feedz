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
    .controller('feedz.postModalController', ($scope, $mdDialog, userFactory, localStorageFactory, subFeedFactory, postFactory, subfeeds) => {

      $scope.subfeeds = subfeeds
      $scope.createNewPost = function() {
        var userData = localStorageFactory.getFromLocalStorage('user_data')
        postFactory.createPost($scope.post, userData).then((PostResponse) => {
          console.log(PostResponse)
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

    .controller('subFeedController', function($state, $scope, getSubFeeds, $mdDialog, userFactory) {
      console.log("subfeeds here", getSubFeeds)
      $scope.subFeeds = getSubFeeds.data

      $scope.loadPost = (feed_id) => {
        $state.go('dash.post', { feed_id })
      }

       $scope.activity = [
      {
        what: 'Brunch this weekejlkjljlkjnd?',
        who: 'Ali Conners',
        when: '3:08PM',
        notes: " I'll be in youkljlkjlkr neighborhood doing errands"
      },
      {
        what: 'Summer BBQ',
        who: 'to Alex, Scott, Jennifer',
        when: '3:08PM',
        notes: "Wish I could comlkjlkjlkje out but I'm out of town this weekend"
      },
      {
        what: 'Oui Oui',
        who: 'Sandra Adams',
        when: '3:08PM',
        notes: "Do youkljlkjlkjlkj have Paris recommendations? Have you ever been?"
      },
      {
        what: 'Birthday Gift',
        who: 'Trevor Hansen',
        when: '3:08PM',
        notes: "Have any ideas of what we should get Heidi for her birthday?"
      },
      {
        what: 'Recipe to try',
        who: 'Brian Holt',
        when: '3:08PM',
        notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
      },
    ];
      $scope.showAddSubFeed = function(ev) {
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
      $scope.showAddPost = function(ev) {
        $mdDialog.show({
            controller: 'feedz.postModalController',
            templateUrl: '/build/addPostModal.html',
            locals: {
              subfeeds: $scope.subFeeds
            },
            targetEvent: ev,
          })
          .then(function(answer) {
            $scope.alert = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.alert = 'You cancelled the dialog.';
          });
      }
    })