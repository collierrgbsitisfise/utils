#! /usr/bin/env node

const {
  exec
} = require('child_process');
const accountsData = require('./git.users.json');
const args = process.argv.slice(2);

const account = args.shift();

const {
  username,
  email
} = accountsData[account] || accountsData['home'];

exec(`git config --global user.name "${username}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec set username error: ${error}`);
    return;
  }

  console.log('set username: done');
});


exec(`git config --global user.email "${email}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec set email error: ${error}`);
    return;
  }

  console.log('set email: done');
});