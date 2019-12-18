const chalk = require('chalk');

const EXIA_LOGO = ` _____        _        
|  ___|      (_)       
| |__  __  __ _   __ _ 
|  __| \\ \\/ /| | / _\` |
| |___  >  < | || (_| |
\\____/ /_/\\_\\|_| \\__,_|`;

const PADDED_EXIA_LOGO = EXIA_LOGO.concat('\n                       ')
  .split('\n')
  .map(line => `    ${line}    `)
  .join('\n');

const STYLED_EXIA_LOGO = chalk.bgBlue(
  chalk.white(chalk.bold(PADDED_EXIA_LOGO)),
);

module.exports = { EXIA_LOGO, PADDED_EXIA_LOGO, STYLED_EXIA_LOGO };
