const fs = require('fs');

const cat = function(cmd, myPath) {
    if (cmd === 'cat') {
        fs.readFile(myPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            } else {
                process.stdout.write(data);
                process.stdout.write('\nprompt > ');
            }
        })
    }
}

module.exports = cat;
