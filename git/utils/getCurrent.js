const {
  exec
} = require("child_process");

exports.getCurrent = function () {
  exec('git config --global user.name', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log('current git username: ', data);
  })

  exec('git config --global user.email', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log('current git email: ', data);
  });
}