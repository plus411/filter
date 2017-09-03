// Channels.js
// Used to dynamically create and destroy voice channels when nessesary

module.exports = {
    remove: function(message, command) {
        message.guild.channels.findAll('name', 'Team').forEach(function(channel, item) {
            if (channel.members.array().length == 0) {
                channel.delete()
            }
        })
    },

    autoPurge: function(message, command) {
        console.log('Running autoPurge.');
        if (message.guild.channels.findAll('name', 'Team').length > 0) {
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
                    message.guild.createChannel('Team', 'voice')
                }

                module.exports.autoPurge(message, command);
                
            break;
                
            case 'remove':
                module.exports.remove(message, command);
            break;

            case 'setup':
                switch (command[3]) {
                    case 'reset':
                        var removeChannels = [];
                        removeChannels.forEach((channel) => {
                            message.guild.channels.find('name', channel).delete();
                        });

                        var defaultChannels = ['General', 'Alternate', 'Overflow'];
                        var moveable = [];

                        var moveChannel = function(channelArray) {
                            setTimeout(() => {
                                moveable[0].setPosition(-3, true);
                                moveable.shift();
                                if (moveable.length > 0) { moveChannel(); }
                            }, 500);
                        }

                        defaultChannels.forEach((channel, index) => {
                            if (!message.guild.channels.find('name', channel)) {
                                message.guild.createChannel(channel, 'voice')
                                .then(newChannel => {
                                    moveable.push(newChannel);
                                    if (index === defaultChannels.length) {
                                        moveChannel();
                                    }
                                })
                                .catch(console.error);
                            }
                        });


                    break;

                    case 'uhc':
                        var defaultChannels = ['Alternate', 'Overflow'];
                        defaultChannels.forEach((channel) => {
                            message.guild.channels.find('name', channel).delete();
                        });
                    break;
                }
            break;
                
        }
    }
}