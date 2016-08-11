angular.module('feedz.userFactory', [])
.factory('userFactory', function($http){
  return {
    userLogin: (user) => {
      return $http({
        method: 'post',
        url: '/user/login',
        data: user
      })
    },
    registerUser: (user) => {
      return $http({
        method: 'post',
        url: '/user/register',
        data: user
      })
    }
  }
})