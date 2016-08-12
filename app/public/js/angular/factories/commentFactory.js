angular.module('feedz.commentFactory', [])
.factory('commentFactory', function($http, localStorageFactory){
  return {
    createPost: (post, user) => {
      return $http({
        method: 'post',
        url: '/posts',
        data: {
          access_token: localStorageFactory.getFromLocalStorage('user_data').token,
          comment: {
            created_by_user: user.id,
            belongs_to_sub_feed: post.belongs_to_sub_feed,
            post_content: post.post_content,
            post_title: post.post_title
          }
        }
      })
    }
  }
})
