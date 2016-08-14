angular.module('feedz.commentFactory', [])
.factory('commentFactory', function($http, localStorageFactory){
  return {
    createComment: (comment, post) => {
      let user = localStorageFactory.getFromLocalStorage('user_data')
      return $http({
        method: 'comment',
        url: '/comments',
        data: {
          access_token: user.token,
          comment: {
            created_at: Date.now(),
            feedz_user_id: user.id,
            feedz_post_id: post.id,
            comment_content: comment.comment_content,
          }
        }
      })
    }
  }
})
