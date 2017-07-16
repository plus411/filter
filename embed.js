//embed.js
// Used to send embeds
const Discord = require('discord.js');

var uhc1 = new Discord.RichEmbed()
	.setColor('#C63F29')
	.setAuthor("THREE'S TROUBLE UHC")
	.setURL('http://poll.mcaquarium.com')
	.setImage('http://i.imgur.com/ZxEXSad.jpg')
	.setDescription("Two weeks out to the Three's Trouble UHC! I hope you've all be considering who you're teaming with because now's the time to pick! You can let us know who you partners in crime will be at: \u000A\u000Ahttp://poll.mcaquarium.com \u000A\u000AThe UHC will take place on:")
	.addField("**Sunday, May 21 at 2 PM EDT**", "I look forward to seeing you all there!")
	.setFooter('The Aquarium Discord');

var uhc = new Discord.RichEmbed()
	.setColor('#C63F29')
	.setAuthor("THREE'S TROUBLE UHC")
	.setURL('http://poll.mcaquarium.com')
	.setImage('http://i.imgur.com/ZxEXSad.jpg')
	.setDescription("Just a reminder, there is only ONE week remaining until the **Three's Trouble UHC**! If you havn't already chosen your teams be sure to stop by **http://poll.mcaquarium.com** and let us know who your partners in crime will be. We're also proud to announce the format of this UHC:\u000A\u000AIt will have 3 player teams, a vanilla world with vanilla ore generation, a world border that moves from a radius of 2000 block to 5 blocks over 2 ours (starting after episode 1), and players will recieve 1 golden apple every time they get a kill!")
	.addField('https://poll.mcaquarium.com')
	.setFooter('The Aquarium Discord');

var minigame = new Discord.RichEmbed()
	.setColor('#329E88')
	.setAuthor('MINIGAME NIGHT')
	//.setImage
	.setDescription("Minigame night has come again! Like last time, we would like your input on what games you'd like to play. You can vote on those games here: http://poll.mcaquarium.com \u000A\u000AThe minigame night will take place this **Friday, May 5 at 4:00 PM EDT** and will run until about 7:30 so don't worry if you can't make the first (or last) round of games.")
	.addField('Vote on your favorite!', 'http://poll.mcaquarium.com')
	.setFooter('The Aquarium Discord');

var julyuhc = new Discord.RichEmbed()
    .setColor('#C63F29')
    .setAuthor("End the Ender UHC")
    .setImage('http://imgur.com/uniOAWb')
    .setDescription("It's time to end the ender dragon! The UHC will take place on:")
    .addField('July 30 at 3 PM EST', "For the first time we'll be returning to the true basics of UHC. This month, in order to win, you need to kill the Ender Dragon! Don't dispair though, you also have the option to murder all of the enemies if that's more your style.")
    .setFooter('The Aquarium Discord');

module.exports = {
	send: function(message, announce, everyone) {
		if (!message.member.roles.exists('name', 'Great Lotls')) {
			message.channel.sendMessage('You may not use this feature');
			return; }
		
		var ping = ' ';
		if (everyone) { ping = '@everyone'; } 
		if (announce) { message.guild.channels.find('name', 'announcements').send(ping, {embed: julyuhc});}
		else { message.channel.send(ping, {embed: julyuhc}); }
	}
}
