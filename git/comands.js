const {
  showAll
} = require('./utils/showAll');

exports.commands = {
  add: () => {
    return 'add';
  },
  set: () => {
    return 'set';
  },
  delete: () => {
    return 'delete';
  },
  showAll: () => {
    return showAll();
  }
}