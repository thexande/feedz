angular.module('feedz.userFactory', [])
.factory('userFactory', function($http){
  return {
    userLogin: (user) => {
      return $http({
        method: 'post',
        url: '/users/login',
        data: user
      })
    }
  }
})