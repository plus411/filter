const fs = require('fs');

module.exports = {
    loadSettings: function(callback) {
        fs.readFile("./settings.json", "utf8", (err, data) => {
            if (err) throw err;
            var settings = JSON.parse(data);
            callback(settings);
        })
    }
}