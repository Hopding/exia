const yargs = require('yargs');

const { chooseOperation, connectToDb, viewSecret } = require('./subcommands');

yargs
  .command('$0', 'the default command', {}, () => {
    chooseOperation();
  })
  .command('db [name]', 'Connect to a PostgreSQL database', {}, ({ name }) => {
    connectToDb(name);
  })
  .command('secret [name]', 'View a secret', {}, ({ name }) => {
    viewSecret(name);
  })
  .help().argv;
