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
      u, //username
      e, //email
      k, //key
    } = args

    if (!u) {
      console.log('username is not defined !');
      console.log('setgit add -u someUserName -e someEmail -k keyName');
      return;
    }

    if (!e) {
      console.log('email is not defined !');
      console.log('setgit add -u someUserName -e someEmail -k keyName');
      return;
    }

    if (!k) {
      console.log('key is not defined !');
      console.log('setgit add -u someUserName -e someEmail -k keyName');
      return;
    }

    return add({
      email: e,
      username: u,
      key: k
    });
  },
  set: ({
    _
  }) => {
    return set(_.pop());
  },
  delete: () => {
    return 'delete';
  },
  showAll: () => {
    return showAll();
  }
}