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

    reorder: function(message) {
        var voiceChannelOrder = ['General', 'Alternate', 'Overflow', 'Team', 'Ballroom', 'Private', 'Sleepy Lotls'];

        voiceChannelOrder.forEach( (channelOrder, index) => {
            var channel = message.guild.channels.findAll('name', channelOrder)

            channel.forEach( (item) => {
                item.setPosition(index + 1);
            });
        });
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

                        console.log(defaultChannels.length);

                        defaultChannels.forEach((channel, index) => {
                            if (!message.guild.channels.find('name', channel)) {
                                message.guild.createChannel(channel, 'voice')
                                .then(newChannel => {
                                    if (index === (defaultChannels.length - 1)) {
                                        module.exports.reorder(message);
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