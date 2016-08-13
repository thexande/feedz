angular.module('feedz.postFactory', [])
.factory('postFactory', function($http, localStorageFactory){
  return {
    createPost: (post, user) => {
      return $http({
        method: 'post',
        url: '/posts',
        data: {
          access_token: localStorageFactory.getFromLocalStorage('user_data').token,
          post: {
            feedz_user_id: user.id,
            feedz_sub_feed_id: post.feedz_sub_feed_id,
            post_content: post.post_content,
            post_title: post.post_title
          }
        }
      })
    }
  }
})
