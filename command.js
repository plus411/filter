// command.js
// Used to seperate out text from a command into aan array

module.exports = {
	makeCommand: function(command, raw, array) {
		if (!raw) { command = command.toLowerCase() }
		if (array == false) { return command } 
		else { 
		  commandArray = command.split(' ');
			if (commandArray.length > 1) { return commandArray }
			else { return command }
		}
	}
}
