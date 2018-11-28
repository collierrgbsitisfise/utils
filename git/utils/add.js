const fs = require('fs');
const path = require('path');

exports.add = function ({
  email,
  username,
  key
}) {
  const data = JSON.parse(String(fs.readFileSync(path.resolve('git.users.json'))));

  const newData = JSON.stringify({
    ...data,
    [key]: {
      "username": username,
      "email": email
    }
  });

  fs.writeFileSync(path.resolve('git.users.json'), newData);
}