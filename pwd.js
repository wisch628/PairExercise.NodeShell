const done = require('./bash.js');
const pwd = function (cmd) {
  if (cmd === 'pwd') {
    let wd = process.cwd();
    done(wd);
  }
};

module.exports = pwd;
