const inquirer = require('inquirer');
const { homedir } = require('os');

const { readJsonFile } = require('./utils');
const { STYLED_EXIA_LOGO } = require('./logo');
const { launchDbSession } = require('./db');

const EXIA_DIR = `${homedir()}/.exia`;

const secrets = readJsonFile(`${EXIA_DIR}/secrets.json`);
const dbs = readJsonFile(`${EXIA_DIR}/dbs.json`);
const dbNames = dbs.map(({ id }) => id);
const secretNames = secrets.map(({ name }) => name);

const promptForDbName = () =>
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedDbName',
        message: 'Which database do you want to view?',
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
        choices: secretNames,
      },
    ])
    .then(answers => answers.selectedSecretName);

const connectToDb = async dbName => {
  const name = dbName || (await promptForDbName());
  const db = dbs.find(({ id }) => id === name);
  const { password } = secrets.find(({ name }) => name === db.id);
  launchDbSession({
    password,
    username: db.username,
    host: db.host,
    port: db.port,
    db: db.name,
  });
};

const viewSecret = async secretName => {
  const sName = secretName || (await promptForSecretName());
  const { password } = secrets.find(({ name }) => name === sName);
  console.log(password);
};

const chooseOperation = () => {
  console.log(STYLED_EXIA_LOGO);
  console.log();
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectedOperation',
        message: 'What do you want to do?',
        choices: ['View a secret', 'Connect to a database'],
      },
    ])
    .then(answers => {
      if (answers.selectedOperation === 'View a secret') {
        viewSecret();
      }
      if (answers.selectedOperation === 'Connect to a database') {
        connectToDb();
      }
    });
};

module.exports = { chooseOperation, connectToDb, viewSecret };
