// Schedule.js
// Allows mods and admins to create a schedule and players to view it
var schedule = [
  { date: new Date(2017, 7, 30, 15),
    title: 'end the ender uhc',
    description: "The Aquarium's first kill the ender dragon UHC!" },
];

module.exports = {
  groom: function() {
    var now = new Date();
    
    schedule.sort(function (a, b) { return a.date.getTime() - b.date.getTime() });
    
    schedule.forEach(function (object, index) {
      if ( object.date.getTime() < now.getTime() ) {
        schedule.splice(index, 1);
      }
    });
  },
  
  build: function() {
    var msgArray = ['```'];
    
    schedule.forEach(function (object) {
      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      
      var weekday = dayNames[object.date.getDay()];
      var month = monthNames[object.date.getMonth()];
      var day = object.date.getDate();
      var hour = object.date.getHours();
      
      if (hour <= 12) { hour = hour + "AM ET"; } 
      else { 
        hour = hour - 12;
        hour = hour + "PM ET";
      }
      
      msgArray.push(object.title);
      msgArray.push(weekday + ', ' + month + ' ' + day + ' at ' + hour);
      msgArray.push(description);
      msgArray.push('---');
    });
    
    msgArray.pop();
    msgArray.push('```');
    
    return msgArray;
    
  },
  
  display: function(message) {
    exports.groom();
    message.channel.send(exports.build());
  }
}