const Feedz = angular
   .module('feedz',['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ui.router',
    'feedz.appController', 'feedz.loginController', 'feedz.registerController', 'feedz.dashController', 'feedz.feedsController',
    'feedz.userFactory'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
    $mdThemingProvider.theme('login')
      .primaryPalette('indigo')
      .accentPalette('green');
  })

  Feedz.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('root')
  // GitHub auth
  // $authProvider.github({
  //   name: 'github',
  //   // heroku
  //   // url: 'http://www.commitmap.com/githubUser',
  //   // localhost
  //   url: '/githubUser',
  //   // commitMapSatelizer Id
  //   clientId:'79c1a9391aa406e3f0a5',

  //   type: '2.0',
  //   redirectUri: 'http://localhost:3000/#/dash',
  //   popupOptions: { width: 1020, height: 618 },
  //   authorizationEndpoint: 'https://github.com/login/oauth/authorize'
  // })
  $stateProvider
    .state('root', {
      url: '/',
      templateUrl: '/build/home.html'
    })
    .state('dash', {
      url: '/dash',
      templateUrl: '/build/dashIndex.html',
      controller: 'dashController'
    })
    .state('feeds', {
      url: '/feeds',
      templateUrl: 'build/feedsIndex.html',
      controller: 'feedsController'
    })
    // .state('dash.repoSelect', {
    //   url: '/reposelect',
    //   templateUrl: 'build/repo-select.html',
    //   controller: 'repoSelectController'
    // })
    // .state('dash.activity', {
    //   url: '/activity',
    //   templateUrl: 'build/activity.html',
    //   controller: 'activityController'
    // })
    // .state('dash.home', {
    //   url: '/home',
    //   templateUrl: 'build/dash-child.html'

    // })
})