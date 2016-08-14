'use strict'
console.realWarn = console.warn;
console.warn = function (message) {
    if (message.indexOf("ARIA") == -1) {
        console.realWarn.apply(console, arguments);
    }
};

const Feedz = angular
   .module('feedz',
    ['ngMaterial',
      'ngMessages',
      'material.svgAssetsCache',
      'ui.router',
      'ngRoute',
      'ngMaterial',
      'ngMdIcons',
      'LocalStorageModule',
      // controllers
      'feedz.appController',
      'feedz.loginController',
      'feedz.subFeedModalController',
      'feedz.registerController',
      'feedz.dashController',
      'feedz.subFeedController',
      'feedz.dashRootController',
      'feedz.postController',
      'feedz.AppCtrl',
      'feedz.showPostController',
      'feedz.subFeedModalController',
      'feedz.commentModalController',
      'feedz.postModalController',
      // factories
      'feedz.localStorageFactory',
      'feedz.userFactory',
      'feedz.subFeedFactory',
      'feedz.postFactory',
      'feedz.utilityFactory',
      'feedz.commentFactory'])

// Feedz.config(function ($mdThemingProvider) {
//     var customPrimary = {
//         '50': '#98a2db',
//         '100': '#8591d5',
//         '200': '#7280ce',
//         '300': '#606fc7',
//         '400': '#4d5ec1',
//         '500': '#3F51B5',
//         '600': '#3849a2',
//         '700': '#32408f',
//         '800': '#2b387c',
//         '900': '#252f69',
//         'A100': '#abb4e2',
//         'A200': '#bec5e8',
//         'A400': '#d1d6ef',
//         'A700': '#1e2756'
//     };
//     $mdThemingProvider
//         .definePalette('customPrimary', 
//                         customPrimary);

//     var customAccent = {
//         '50': '#19120f',
//         '100': '#291d18',
//         '200': '#392822',
//         '300': '#49332b',
//         '400': '#593f35',
//         '500': '#694a3e',
//         '600': '#896052',
//         '700': '#996b5b',
//         '800': '#a57868',
//         '900': '#af8778',
//         'A100': '#896052',
//         'A200': '#795548',
//         'A400': '#694a3e',
//         'A700': '#b89588'
//     };
//     $mdThemingProvider
//         .definePalette('customAccent', 
//                         customAccent);

//     var customWarn = {
//         '50': '#616161',
//         '100': '#545454',
//         '200': '#474747',
//         '300': '#3a3a3a',
//         '400': '#2e2e2e',
//         '500': '#212121',
//         '600': '#141414',
//         '700': '#070707',
//         '800': '#000000',
//         '900': '#000000',
//         'A100': '#6d6d6d',
//         'A200': '#7a7a7a',
//         'A400': '#878787',
//         'A700': '#000000'
//     };
//     $mdThemingProvider
//         .definePalette('customWarn', 
//                         customWarn);

//     var customBackground = {
//         '50': '#fdfdfd',
//         '100': '#f0f0f0',
//         '200': '#e3e3e3',
//         '300': '#d6d6d6',
//         '400': '#cacaca',
//         '500': '#BDBDBD',
//         '600': '#b0b0b0',
//         '700': '#a3a3a3',
//         '800': '#979797',
//         '900': '#8a8a8a',
//         'A100': '#ffffff',
//         'A200': '#ffffff',
//         'A400': '#ffffff',
//         'A700': '#7d7d7d'
//     };
//     $mdThemingProvider
//         .definePalette('customBackground', 
//                         customBackground);

//    $mdThemingProvider.theme('default')
//        .primaryPalette('customPrimary')
//        .accentPalette('customAccent')
//        .warnPalette('customWarn')
//        .backgroundPalette('customBackground')
// });

  // local stroage config
  Feedz.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('Feedz')
    .setStorageType('localStorage')
    .setNotify(true, true)
})

  Feedz.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('login')

  $stateProvider
  .state('login', {
      url: '/login',
      templateUrl: '/build/login.html',
      controller: 'loginController'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/build/registerIndex.html',
      controller: 'registerController'
    })
    .state('dash', {
      url: '/dash',
      templateUrl: '/build/sideNav.html',
      controller: 'dashRootController'
    })
    .state('dash.home', {
      url: '/home',
      templateUrl: '/build/dashIndex.html',
      controller: 'dashController'
    })
    .state('dash.feeds', {
      url: '/feeds',
      params: {post_id: null},
      templateUrl: '/build/feedsIndex.html',
      resolve: {
        getSubFeeds: ($http) => $http({ method: 'get', url: '/f' })
      },
      controller: 'subFeedController'
    })
    .state('dash.post', {
      url: '/post',
      params: {feed_id: null, feed_name: null, feeds: null},
      resolve:  {
        subfeeds: ($http) => $http.get('/f/'),
        getFeed: ($stateParams) => $stateParams,
        getFeedById: ($stateParams, $http) => {
          return $http({
            method: 'get',
            url: '/f/' + $stateParams.feed_id + '/comments'
          })
        },
        // getAllCommentsForFeed: ($stateParams) => {
        //   return $http({
        //     method: 'get',
        //     url: '/f/' + $stateParams.post_id + "/comments"
        //   })
        // }
      },
      templateUrl:  '/build/postIndex.html',
      controller: 'postController'
    })

    .state('dash.showPost', {
      url: '/showPost',
      params: { feed_name: null, post_id: null },
      resolve:  {
        getPost: ($stateParams) => $stateParams,
        getPostById: ($stateParams, $http) => {
          return $http({
            method: 'get',
            url: '/posts/' + $stateParams.post_id
          })
        }
      },
      templateUrl:  '/build/showPostIndex.html',
      controller: 'showPostController'
    })
    .state('logout', {
		  url: '/logout',
		  controller: function($scope, $route, $state) {
          $state.go('login')
		  }
    })
})





Feedz.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};

Feedz.directive('userAvatar', function() {
  return {
    replace: true,
    template: '<svg class="user-avatar" viewBox="0 0 128 128" height="64" width="64" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
  };
});

