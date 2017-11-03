module.exports = {
    poll: function(message) {
        console.log(message.content);

        var acceptedEmoji = ['👍', '👎', '❤️', '💙', '❌', '⭕️', '✅', '🔴', '🔵', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧', '0⃣', '1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];

        var msgString = message.content.split(' ');
        msgString.reverse();
        msgString.forEach((item, index) => {
            if ( item.includes('\n') ) {
                msgString.splice(index, 1);
                item.split('\n').forEach((item) => {
                msgString.splice(index, 0, item);
                })
            }
        });
        msgString.reverse();

        var emoji = [];
        msgString.forEach((item) => {
            if (acceptedEmoji.includes(item)) { emoji.push(item) }
        });

        //emoji.forEach((item) => { message.react(item) })

        var react = function(emoji, index) {
            message.react(emoji[index])
            .then(() => {
                index++;
                if (index < emoji.length) { react(emoji, index) }
            })
        }

        if ( emoji.length > 0 ) { react(emoji, 0) }
    }
}