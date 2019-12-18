const { execSync } = require('child_process');

const launchDbSession = ({ username, password, host, port, db }) => {
  const command = `
    PGPASSWORD='${password}' pgcli \\
      --username ${username}       \\
      --host   ${host}             \\
      --port   ${port}             \\
      --dbname ${db}
  `;
  execSync(command, { stdio: 'inherit' });
};

module.exports = { launchDbSession };
