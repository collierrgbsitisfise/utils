const {
  showAll
} = require('./utils/showAll');
const {
  set
} = require('./utils/set');

exports.commands = {
  add: () => {
    return 'add';
  },
  set: (args) => {
    return set(args.pop());
  },
  delete: () => {
    return 'delete';
  },
  showAll: () => {
    return showAll();
  }
}