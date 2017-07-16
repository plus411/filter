// autoadmin.js
// Used to do automatic administraion of the server

var log = [];
var authNum = 0;

module.exports = {
    nospam: function(message) {
        log.unshift(message);
        if (log.length > 3) { log.pop }
        
        var author = '';
        log.forEach(function(message, index) {
            if (index > 0 && message.author === author) {
               authNum++;
                if (authNum === 3) {
                    log.forEach(function(message) {
                        message.delete();
                    });
                }
            }
            
            var author = message.author;
        });
    }
}