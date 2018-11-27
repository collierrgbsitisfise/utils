const fs = require('fs');
const path = require('path');

exports.deleteByKey = function (key) {
  const data = JSON.parse(String(fs.readFileSync(path.resolve('git.users.json'))));
  delete data[key];
  fs.writeFileSync(path.resolve('git.users.json'), JSON.stringify({ ...data
  }));
}