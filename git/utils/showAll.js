const fs = require('fs');
const path = require('path');

exports.showAll = function () {
  const data = JSON.parse(String(fs.readFileSync(path.resolve('git.users.json'))));
  Object.entries(data).forEach(current => {
    console.log(current[0]);
    console.log('username: ', current[1].username);
    console.log('email: ', current[1].email);
    console.log('\n');
  })
}