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

var draft = {};

module.exports = {
  build: function() {
    var msgArray = ['***UPCOMING EVENTS:***'];

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
  },

  check: function() {
    schedule.forEach(function (object, index) {
      if ( object.date.isBefore() ) {
        schedule.splice(index, 1);
      }
    });
  },

  add: function(message, command, cmdRaw) {
    var type = command[2];
    var input = cmdRaw.slice(2).join(' ');

    if ( type === "commit" ) { 
      for ( var i = 0; i <= schedule.length; i++ ) {
        if ( draft.date.isBefore(schedule.date) ) {
          schedule.splice(i, 0, draft);
          console.log('commit ran');
        }
      }
    }

    if ( type === "date" ) { input = moment(command[3], 'YYYY/MM/DD-hh:mmaa'); console.log('date added') }
    if ( type === "title" ) { input = input.toLowerCase(); console.log('title added')}

    draft[type] = input;

    console.log(type);
    console.log(input);
    console.log(draft);
  }

}