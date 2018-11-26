#! /usr/bin/env node

const fs = require("fs");
const {
  commands
} = require('./comands.js');

const {
  exec
} = require("child_process");
const accountsData = require("./git.users.json");
const {
  _,
} = require('minimist')(process.argv.slice(2)) || [];

const doIt = commands[_.shift()] || (() => 'incorrect key');
doIt(process.argv);

// const args = args.shift();

// const {
//   username,
//   email
// } = accountsData[account] || accountsData["home"];

// const set = () => {
//   exec(
//     `git config --global user.name "${username}"`,
//     (error, stdout, stderr) => {
//       if (error) {
//         console.error(`exec set username error: ${error}`);
//         return;
//       }

//       console.log("set username: done");
//     }
//   );

//   exec(`git config --global user.email "${email}"`, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec set email error: ${error}`);
//       return;
//     }

//     console.log("set email: done");
//   });
// };

// set();
// const add = (username, email, key) => {
//   const data = {
//     ...accountsData,
//     key: {
//       username,
//       email
//     }
//   };

//   fs.writeFileSync("git.user.json", JOSN.stringfy(data));
// };

// const dellete = key => {
//   delete data["key"];
//   fs.writeFileSync("git.user.json", JOSN.stringfy({ ...data
//   }));
// };

// const getAll = key => {
//   fs.writeFileSync();
// };