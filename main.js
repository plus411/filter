const Discord = require('discord.js');
const bot = new Discord.Client();
const auth = require('./auth.js');
const cmdProcess = require('./command.js');
const group = require('./group.js');
const embed = require('./embed.js');
const dm = require('./direct.js');
const dice = require('./dice.js');
const admin = require('./autoadmin.js');
const channels = require('./channels.js');

bot.on('ready', () => { console.log('Tank Filled!') });

bot.on('message', message => {
	var command = cmdProcess.makeCommand(message.content);
	var cmdRaw = cmdProcess.makeCommand(message.content, true);
	
	if (command === auth.prefix) {message.channel.send('Filtering Tank!');}
	
	if (command[0] == auth.prefix) {
  	switch (command[1]) {
    	case 'join':
				group.group(message, command, cmdRaw);
			break;

			case 'leave':
				group.group(message, command, cmdRaw);
			break;

			case 'rules':
				dm.rules(message);
			break;

			case 'roll':
				dice.roll(command,message);
			break;
            
            case 'embed':
                embed.send(message, true, true);
            break;
            
            case 'voice':
                channels.channelmod(message,command);
            break;
    }}
    
    if (auth.prefix === 'filter') { admin.log(message); }
});

bot.on('voiceStateUpdate', (oldState, state) => {
  if (state.voiceChannel != undefined) {
    state.addRole(state.guild.roles.find('name', 'Voice'));
  } else {
    state.removeRole(state.guild.roles.find('name', 'Voice'));
 }
});


bot.login(auth.token);
