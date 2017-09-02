// Channels.js
// Used to dynamically create and destroy voice channels when nessesary

module.exports = {
    remove: function(message, command) {
        message.guild.channels.findAll('name', 'auto').forEach(function(channel, item) {
            if (channel.members.array().length == 0) {
                channel.delete()
            }
        })
    },

    autoPurge: function(message, command) {
        if (message.guild.channels.findAll('name', 'auto').length > 0) {
            module.exports.remove(message, command);
            setTimeout(() => { module.exports.autoPurge(message, command) }, 30000);
        }
    },

    channelmod: function(message,command) {
        switch (command[2]) {
        
            case 'add':
                if (command[3] > 0) { 
                    var amount = command[3] 
                }
                else { 
                    message.channel.send('Try formatting the command like this: _filter voice add <amount>_') 
                    return;
                }
                
                for (var i = 0; i < amount; i++) {
                    message.guild.createChannel('auto', 'voice')
                }

                module.exports.autoPurge(message, command);
                
            break;
                
            case 'remove':
                module.exports.remove(message, command);
                
            break;
                
        }
    }
}