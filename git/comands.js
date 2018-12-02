const {
  showAll,
  set,
  add,
  deleteByKey,
  getCurrent
} = require('./utils');

exports.commands = {
  add: async (args) => {

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

    return await add({
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
  delete: (args) => {
    const {
      k //key
    } = args;
    deleteByKey(k)
  },
  showAll: () => {
    return showAll();
  },
  current: () => {
    return getCurrent();
  }
}