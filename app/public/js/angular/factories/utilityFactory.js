angular.module('feedz.utilityFactory', [])
.factory('utilityFactory', function($http, localStorageFactory){
  return {
    parseTimeStamp: (stamp) => {
      // Create an array with the current month, day and time
      var date = [ stamp.getMonth() + 1, stamp.getDate(), stamp.getFullYear() ];

    // Create an array with the current hour, minute and second
      var time = [ stamp.getHours(), stamp.getMinutes(), stamp.getSeconds() ];

    // Determine AM or PM suffix based on the hour
      var suffix = ( time[0] < 12 ) ? "AM" : "PM";

    // Convert hour from military time
      time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

    // If hour is 0, set it to 12
      time[0] = time[0] || 12;

    // If seconds and minutes are less than 10, add a zero
      for ( var i = 1; i < 3; i++ ) {
        if ( time[i] < 10 ) {
          time[i] = "0" + time[i];
        }
      }
    // Return the formatted string
      return date.join("/") + " " + time.join(":") + " " + suffix;
    }
  }
})
