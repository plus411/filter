const roll = require('roll'),
      dice = new roll();

module.exports = {
    roll: function(command,message) {
        if (command[2].split('d')[0] > 100) {
            message.channel.sendMessage("Woah there! That's a lot of dice. Let's not roll them all at once.");
            return;
        }
        if (dice.validate(command[2])) {
            var rolls = dice.roll(command[2]);
            message.channel.sendMessage('Total: ' + rolls.result);
            
            if (command[3] === 'all') {
                var indDice = rolls.rolled.join(' ');
                message.channel.sendMessage('Dice rolled: ' + indDice)
            }
            
        } else {
            message.channel.sendMessage("This isn't a valid dice format. Try formatting it like this, 1d20")
        }
}}
