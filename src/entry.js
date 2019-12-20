const yargs = require('yargs');

const {
  chooseOperation,
  connectToDb,
  viewSecret,
  viewLogo,
} = require('./subcommands');

yargs
  .command('$0', 'A handy tool for database and secret management', {}, () => {
    chooseOperation();
  })
  .command('db [name]', 'Connect to a PostgreSQL database', {}, ({ name }) => {
    connectToDb(name);
  })
  .command('secret [name]', 'View a secret', {}, ({ name }) => {
    viewSecret(name);
  })
  .command('logo', 'View a secret', {}, () => {
    viewLogo();
  })
  .help().argv;
