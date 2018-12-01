const fs = require('fs');

exports.fallBackGitUser = function () {
  return new Promise((res, rej) => {
    fs.writeFile(path.resolve('git.users.json'), '{}', function (err) {
      if (err) {
        rej(err);
      }
      res(true);
    });
  })
};