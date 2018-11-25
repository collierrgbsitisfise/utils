const fs = require('fs');
const path = require('path');

exports.showAll = function () {
  const data = JSON.parse(String(fs.readFileSync(path.resolve('git.users.json'))));
  Object.values(data).forEach(({
    username,
    email
  }) => {
    console.log('username: ', username);
    console.log('email: ', email);
    console.log('\n');
  })
}