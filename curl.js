const request= require('request');
const done = require('./bash.js');

const curl = function(cmd) {
    const cmdArray = cmd.split(' ');
    if (cmdArray[0] === 'curl') {
        request(cmdArray[1], (err, response, body) => {
            if (err) {
                throw err;
            } else {
                done(body);
            }
            
        })
    }
}

module.exports = curl;