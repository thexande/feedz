angular.module('feedz.karmaFactory', [])
.factory('karmaFactory', function($http, localStorageFactory){
  return {
    upVote: (post_id) => {
      let user = localStorageFactory.getFromLocalStorage('user_data')
      return $http({
        method: 'post',
        url: '/karma/up/' + post_id,
        data: {
          access_token: user.token,
          post_id,
          user_id: user.id
        }
      })
    },
  downVote: (post_id) => {
      let user = localStorageFactory.getFromLocalStorage('user_data')
      return $http({
        method: 'post',
        url: '/karma/down/' + post_id,
        data: {
          access_token: user.token,
          post_id,
          user_id: user.id
        }
      })
    }
  }
})
