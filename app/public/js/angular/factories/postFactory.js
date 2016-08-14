angular.module('feedz.postFactory', [])
.factory('postFactory', function($http, localStorageFactory){
  return {
    createPost: (post, user) => {
      post.created_at = Date.now()
      post.feedz_user_id = user.id
      return $http({
        method: 'post',
        url: '/posts',
        data: {
          access_token: localStorageFactory.getFromLocalStorage('user_data').token,
          post
        }
      })
    }
  }
})
