// Schedule.js
// Allows mods and admins to create a schedule and players to view it

const moment = require('moment'); 

var schedule = [
  { date: moment('2017/08/05-04:30pm', 'YYYY/MM/DD-hh:mmaa'),
    title: 'karaoke night',
    description: "Let's sing! Serenade us with the song of your peoples at our biweekly karaoke night!" }, 

  { date: moment('2017/08/11-04:00pm', 'YYYY/MM/DD-hh:mmaa'),
    title: 'minigame night',
    description: "The Aquarium's Biweekly minigame night. Go head to head against other fish in a competitive minigame!" }
]; 

module.exports = {
  build: function() {
    var msgArray = ['***Upcoming Events:***'];

    schedule.forEach(function(object) {
      msgArray.push('**' + object.title.toUpperCase() + '**');
      msgArray.push('*' + object.date.format('dddd, MMMM D [at] h:m A') + ' ' + object.date.fromNow() + '*');
      msgArray.push(object.description);
      msgArray.push('-----');
    });

    msgArray.pop();
    
    return msgArray
  },

  display: function(message) {
    message.channel.send(module.exports.build());
  }
}