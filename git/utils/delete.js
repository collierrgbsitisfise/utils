const fs = require("fs");
const path = require("path");

const { fallBackGitUser } = require("./fallBackGitUsers");

exports.deleteByKey = async function(key) {
  try {
    const data = JSON.parse(
      String(fs.readFileSync(path.resolve("git.users.json")))
    );
    delete data[key];
    fs.writeFileSync(
      path.resolve("git.users.json"),
      JSON.stringify({ ...data })
    );
  } catch (err) {
    console.log("error during deleting");
    await fallBackGitUser();
    console.log("fallback done");
  }
};
