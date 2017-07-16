// Direct.js
// Used for controling direct messages to players.

const Discord = require('discord.js');

var rules = ['**Welcome to The Aquarium**', 'In order for everone to have the best time possible there are some rules we need to put into place.', ' ', '**No spamming.** Multiple messages in quick succession, especially for the purpose of disrupting the chat and causing chaos, will not be tolerated.', ' ', '**No advertising.** Please do not post links or advertisements in any of the chats without prior approval from one of the “Great Lotls.” This includes instant invites to other discord servers, twitch streams, and youtube accounts. *We do want to promote your content, but we need to keep spam and unrelated advertisements to a minimum, so please ask!*', ' ',  '**No illegal or obscene content.** Adult content is not acceptable. Illegal content will be reported to the appropriate authorities.', ' ',  '**Keep discussion to the relevant channel.** Please attempt to keep your discussions to the relevant channels. #general for normal conversation, #events for talking about the events we do, #derpwatch for overwatch and non-minecraft related games, #filtertesting for filter commands, #cultchat for nothing, and #saltwater for general shitposting and inappropriate content.'];

module.exports = {
	rules: function(message) {
		message.author.sendMessage(rules);
		message.channel.sendMessage('Thank you, I do! If you would like to read the rules too you can type "filter rules"!');
	}
}
