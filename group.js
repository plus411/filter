// Group.js
// Group processing

var alias = [['nsfw-saltwater','saltwater','shitposting'],['Derpy Lotls','overwatch','derpwatch','derpy lotls'],['Aquarium Pirates', 'pirates', 'captain', 'captains', 'aqua', 'cloud pirates', 'aquarium pirates'],['Terralotls', 'terraria', 'aquarria']]
var groupsJoinable = ['Derpy Lotls', 'Lotls', 'Reef Dwellers', 'Aquarium Pirates', 'Terralotls'];
var channelsJoinable = ['nsfw-saltwater'];

module.exports = {
	group: function (message, command, cmdRaw, data) {
		var operation = command[1];
		var group = cmdRaw.slice(2).join(' ');

		for (var i = 0; i < alias.length; i++) {
			if ( alias[i].includes(group) ) {
				group = alias[i][0];
				break;
			}}
		
		if (message.guild.roles.exists('name', group)) { var groupType = 'role'; }
		else if (message.guild.channels.exists('name', group)) { var groupType = 'channel'; }
		else { 
			message.channel.sendMessage('_' + group + '_ does not exist.'); 
			console.log(message.member.nickname + ' has failed to join/leave ' + group + '. The group does not exist.');
		return; }

		if (message.member.nickname) {var name = message.member.nickname}
		else {var name = message.author.username}

		switch (operation) {	
			case 'join':
				if (!groupsJoinable.includes(group) && !channelsJoinable.includes(group)) { 
					message.channel.sendMessage('You may not join _' + group + '_.'); 
					console.log(name + ' has failed to join ' + group + '. The group was not whitelisted.');
					return; }
				if (groupType == 'role'  && groupsJoinable.includes(group)) {
					message.member.addRole(message.guild.roles.find('name', group));
					message.channel.sendMessage(name + ' has joined _' + group + '_'); 
					console.log(name + ' has joined ' + group); }
				else if (groupType == 'channel' && channelsJoinable.includes(group)) {
					message.guild.channels.find('name', group).overwritePermissions(message.author,{READ_MESSAGES: true});
					message.channel.sendMessage(name + ' has joined _' + group + '_'); 
					console.log(name + ' has joined ' + group); }
			break;
			
			case 'leave':			
				if (!channelsJoinable.includes(group) && !groupsJoinable.includes(group)) { 
					message.channel.sendMessage('There was an error removing you from that group'); 
					return; }
				if (groupType == 'role') {
					message.member.removeRole(message.guild.roles.find('name',group));
					message.channel.sendMessage(name + ' has left ' + group);
					console.log(name + ' has left ' + group); }
				if(groupType == 'channel' && channelsJoinable.includes(group)) {
					message.guild.channels.find('name', group).overwritePermissions(message.author, {READ_MESSAGES: false});
					message.channel.sendMessage(name + ' has left ' + group);
					console.log(name + ' has left ' + group);}
			break; 
			}
		}}
