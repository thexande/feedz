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
  

}]);