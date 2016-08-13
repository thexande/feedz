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
            belongs_to_sub_feed: post.belongs_to_sub_feed,
            post_content: post.post_content,
            post_title: post.post_title
          }
        }
      })
    }
  }
})
