const {
  showAll
} = require('./utils/showAll');
const {
  set
} = require('./utils/set');
const {
  add
} = require('./utils/add');

exports.commands = {
  add: (args) => {

    const {
      u,
      e
    } = args

    if (!u) {
      console.log('username is not defined !');
      console.log('setgit add -u someUserName -e someEmail');
      return;
    }

    if (!e) {
      console.log('email is not defined !');
      console.log('setgit add -u someUserName -e someEmail');
      return;
    }

    return add({
      email: e,
      username: u
    });
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