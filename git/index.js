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
doIt(require('minimist')(process.argv.slice(2)));