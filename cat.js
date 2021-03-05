const fs = require('fs');
const done = require('./bash.js');

const cat = function(cmd) {
    const cmdArray = cmd.split(' ');
    if (cmdArray[0] === 'cat') {
        fs.readFile(cmdArray[1], 'utf8', (err, data) => {
            if (err) {
                throw err;
            } else {
                done(data);
            }
        })
    }
}

module.exports = cat;
