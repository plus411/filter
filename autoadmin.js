// autoadmin.js
// Used to do automatic administraion of the server

module.exports = {
    log: function(message) {
        if (message.channel != message.guild.channels.find('name', 'adminlog')) {
            message.guild.channels.find('name', 'adminlog').sendMessage(message.channel + ' : ' + message.author + ' : ' + message.content);
            
            if (message.attachments.first().url) { message.guild.channels.find('name', 'adminlog').send(message.attachments.first().url); }
        }
    }
}