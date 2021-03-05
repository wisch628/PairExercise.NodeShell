const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const filePath = process.cwd();

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  pwd(cmd);
  ls(cmd);
  cat(cmd, filePath);
});
