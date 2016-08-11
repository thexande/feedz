angular.module('feedz.AppCtrl', [])
.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', 'localStorageFactory',
function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, localStorageFactory){
    // get user data for dashboard
    $scope.userData = localStorageFactory.getFromLocalStorage('user_data')
    console.log($scope.userData)

  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 	$scope.menu = [
    {
      link : '/#/dash/home',
      title: 'Dashboard',
      icon: 'dashboard'
    },
    {
      link : '/#/dash/feeds',
      title: 'Feedz',
      icon: 'group'
    },
    {
      link : '/#/dash/post',
      title: 'Posts',
      icon: 'message'
    },
    {
      link : '/#/logout',
      title: 'Logout',
      icon: 'logout'
    }
  ];

  $scope.activity = [
      {
        what: 'Brunch this weekend?',
        who: 'Ali Conners',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        what: 'Summer BBQ',
        who: 'to Alex, Scott, Jennifer',
        when: '3:08PM',
        notes: "Wish I could come out but I'm out of town this weekend"
      },
      {
        what: 'Oui Oui',
        who: 'Sandra Adams',
        when: '3:08PM',
        notes: "Do you have Paris recommendations? Have you ever been?"
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
  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };
  
  $scope.showAdd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/build/addSubFeedModal.html',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };
}]);