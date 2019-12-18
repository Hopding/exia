const fs = require('fs');

const readJsonFile = filePath => JSON.parse(String(fs.readFileSync(filePath)));

module.exports = { readJsonFile };
