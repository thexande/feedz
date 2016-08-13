angular.module('feedz.subFeedFactory', [])
.factory('subFeedFactory', function($http, localStorageFactory){
  return {
    getPostsForFeed: (id) => {
          return $http({
            method: 'get',
            url: '/f/' + id + '/comments'
          })
    },
    getSubFeeds: () => $http({ method: 'get', url: '/f' }),
    createSubFeed: (subfeed, user) => {
      subfeed.created_at = Date.now()
      return $http({
        method: 'post',
        url: '/f',
        data: {
          access_token: localStorageFactory.getFromLocalStorage('user_data').token,
          subfeedData: subfeed,
          user: user
        }
      })
    }
  }
})
