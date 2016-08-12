  angular.module('feedz.subFeedController', [])
    .controller('subFeedController', function($state, $scope, getSubFeeds, $mdDialog, userFactory) {
      console.log("subfeeds here", getSubFeeds)
      $scope.subFeeds = getSubFeeds.data

      $scope.loadFeed = (feed_id, feed_name) => {
        $state.go('dash.post', { feed_id, feed_name })
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
      }
      $scope.showAddComment = function(post_id) {
        $mdDialog.show({
            controller: 'feedz.commentModalController',
            templateUrl: '/build/addCommentModal.html',
            // locals: {
            //   subfeeds: $scope.subFeeds
            // },
            // targetEvent: ev,
          })
      }
    })
