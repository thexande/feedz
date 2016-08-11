angular.module('feedz.localStorageFactory', [])
  .factory('localStorageFactory', function($http, localStorageService){
    return {
      // local storage methods
      getFromLocalStorage: (key) => {
        return localStorageService.get(key)
      },
      setToLocalStorage: (key, value) => {
        return localStorageService.set(key, value)
      }   
    }
})