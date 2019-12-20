const { execSync } = require('child_process');

const launchPgcli = ({ username, password, host, port, db }) => {
  const command = `
    PGPASSWORD='${password}' pgcli \\
      --username ${username}       \\
      --host   ${host}             \\
      --port   ${port}             \\
      --dbname ${db}
  `;
  execSync(command, { stdio: 'inherit' });
};

const launchDb2cli = ({ username, password, host, port, db }) => {
  const command = `
    db2cli execsql -connstring '
      Uid=${username}; 
      Pwd=${password}; 
      Database=${db}; 
      Protocol=TCPIP; 
      Hostname=${host}; 
      Port=${port};
    '
  `.replace(/\s+/g, ' ');
  execSync(command, { stdio: 'inherit' });
};

module.exports = { launchPgcli, launchDb2cli };
