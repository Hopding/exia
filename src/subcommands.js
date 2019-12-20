const inquirer = require('inquirer');
const { homedir } = require('os');

const { readJsonFile } = require('./utils');
const { STYLED_EXIA_LOGO, EXIA_LOGO_IMAGE } = require('./logo');
const { launchPgcli, launchDb2cli } = require('./db');

const EXIA_DIR = `${homedir()}/.exia`;

const secrets = readJsonFile(`${EXIA_DIR}/secrets.json`);
const dbs = readJsonFile(`${EXIA_DIR}/dbs.json`);
const dbNames = dbs.map(({ id }) => id);
const secretNames = secrets.map(({ id }) => id);

const promptForDbName = () =>
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedDbName',
        message: 'Which database do you want to view?',
        pageSize: 10,
        choices: dbNames,
      },
    ])
    .then(answers => answers.selectedDbName);

const promptForSecretName = () =>
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedSecretName',
        message: 'Which secret do you want to view?',
        pageSize: 10,
        choices: secretNames,
      },
    ])
    .then(answers => answers.selectedSecretName);

const connectToDb = async dbName => {
  const name = dbName || (await promptForDbName());
  const db = dbs.find(({ id }) => id === name);

  const { password } = secrets.find(({ id }) => id === db.passwordId);
  const config = {
    password,
    username: db.username,
    host: db.host,
    port: db.port,
    db: db.dbName,
  };

  if (db.type === 'postgres') launchPgcli(config);
  else if (db.type === 'db2') launchDb2cli(config);
  else throw new Error(`Unknown \`db.type\`: ${db.type}`);
};

const viewSecret = async secretName => {
  const name = secretName || (await promptForSecretName());
  const { password } = secrets.find(({ id }) => id === name);
  console.log(password);
};

const viewLogo = () => {
  console.log(EXIA_LOGO_IMAGE);
};

const chooseOperation = () => {
  // console.log(STYLED_EXIA_LOGO);
  // console.log();
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedOperation',
        message: 'What do you want to do?',
        choices: ['View a secret', 'Connect to a database', 'View exia logo'],
      },
    ])
    .then(answers => {
      if (answers.selectedOperation === 'View a secret') {
        viewSecret();
      }
      if (answers.selectedOperation === 'Connect to a database') {
        connectToDb();
      }
      if (answers.selectedOperation === 'View exia logo') {
        viewLogo();
      }
    });
};

module.exports = { chooseOperation, connectToDb, viewSecret, viewLogo };
