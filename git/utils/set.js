const fs = require('fs');
const path = require('path');
const {
  exec
} = require("child_process");

exports.set = function set(key) {
  const data = JSON.parse(String(fs.readFileSync(path.resolve('git.users.json'))));

  if (!data[key]) {
    console.log(`not found credentials by key ${key}`);
    return;
  }

  const {
    username,
    email
  } = data[key];

  exec(
    `git config --global user.name "${username}"`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec set username error: ${error}`);
        return;
      }

      console.log("set username: done");
    }
  );

  exec(`git config --global user.email "${email}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec set email error: ${error}`);
      return;
    }

    console.log("set email: done");
  });
}