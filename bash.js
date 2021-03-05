const done = function (output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}
module.exports = done;

const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const filePath = process.cwd();
const curl = require('./curl.js');
const date = require('./date.js');
const { head } = require('request');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  pwd(cmd);
  ls(cmd);
  cat(cmd);
  curl(cmd);
  date(cmd);
  //echo(cmd);
  //head(cmd);
});
