angular
   .module('myApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('indigo');
  
    // Define a theme for the Login dialogs; 
    // @see <md-dialog md-theme="login">...</md-dialog>
  
    $mdThemingProvider.theme('login')
      .primaryPalette('indigo')
      .accentPalette('green');
    
  })
  .controller('appController',function($scope,$mdDialog){
    $scope.showLogin = function() {
        $mdDialog.show({
        controller: 'LoginController',
        templateUrl: '/build/loginModal.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true
      });      
    }  

  })
  .controller('LoginController', function($scope, $mdDialog, $log) {
    $scope.cancel = function() {
      $mdDialog.hide();
    };
    $scope.login = function() {
      $log.debug("login()...");
      $mdDialog.hide();
    };
    $scope.user = {
      company: 'Google, Inc.',
      email: 'ThomasBurleson@Gmail.com',
      phone: ''
    };
        $scope.showRegister = function() {

        $mdDialog.show({
        controller: 'registerController',
        templateUrl: '/build/registerModal.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true
      });      
    }  
  })
  .controller('registerController', function($scope, $mdDialog, $log) {
    $scope.cancel = function() {
      $mdDialog.hide();
    };
    $scope.register = function() {
      $log.debug("register()...");
      $mdDialog.hide();
    };
    $scope.user = {
      company: 'Google, Inc.',
      email: 'ThomasBurleson@Gmail.com',
      phone: ''
    };
  })


/*
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
*/