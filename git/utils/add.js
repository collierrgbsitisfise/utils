const fs = require('fs');
const path = require('path');

const {
  fallBackGitUser
} = require('./fallBackGitUsers');

exports.add = async function ({
  email,
  username,
  key
}) {
  try {
    const data = JSON.parse(String(fs.readFileSync(path.resolve('git.users.json'))));

    const newData = JSON.stringify({
      ...data,
      [key]: {
        "username": username,
        "email": email
      }
    });

    fs.writeFileSync(path.resolve('git.users.json'), newData);
  } catch (err) {
    console.log('err during adding new user');
    await fallBackGitUser();
    console.log('fallback done');
  }
}