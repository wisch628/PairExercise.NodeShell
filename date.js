const done = require('./bash.js');
const date = function(cmd) {
    if (cmd === 'date') {
        const currentDate = new Date();
        done(currentDate.toDateString());
    }
};


module.exports = date;