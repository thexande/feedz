angular.module('feedz.subFeedFactory', [])
.factory('subFeedFactory', function($http, localStorageFactory){
  return {
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
