const config = require("./config");

function printHeader() {
  console.log("=================================");
  console.log(` ${config.appName}`);
  console.log(` Version: ${config.version}`);
  console.log("=================================");
  console.log(`Time: ${new Date().toLocaleString()}`);
  console.log("");
}

module.exports = {
  printHeader,
};
