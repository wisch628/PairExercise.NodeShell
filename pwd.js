const pwd = function (cmd) {
  if (cmd === 'pwd') {
    let wd = process.cwd();
    process.stdout.write(wd);
    process.stdout.write('\nprompt > ');
  }
};

module.exports = pwd;
