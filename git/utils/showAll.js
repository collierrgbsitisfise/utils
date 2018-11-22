const fs = require('fs');
const path = require('path');

exports.showAll = function () {
  const data = fs.readFileSync(path.resolve('git.users.json'));
  return String(data);
}