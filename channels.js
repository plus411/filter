// Channels.js
// Used to dynamically create and destroy voice channels when nessesary

module.exports = {
    autoPurge: function() {

    },

    remove: function(message, command) {
        message.guild.channels.findAll('name', 'auto').forEach(function(channel, item) {
            console.log(item);
            if (channel.members.array().length == 0) {
                //console.log(channel.members.array().length)
                channel.delete()
            }
        })
    },

    channelmod: function(message,command) {
        switch (command[2]) {
        
            case 'add':
                if (command[3] > 0) { var amount = command[3] }
                else { 
                    message.channel.send('Try formatting the command like this: _filter voice add <amount>_') 
                    return;
                }
                
                for (var i = 0; i < amount; i++) {
                    message.guild.createChannel('auto', 'voice')
                }
                
            break;
                
            case 'remove':
                module.exports.remove(message, command);
                
            break;
                
        }
    }
}