function printHeader() {
  console.log("=================================");
  console.log(" Ethereum Wallet Tracker");
  console.log("=================================");
  console.log(`Time: ${new Date().toLocaleString()}`);
  console.log("");
}

module.exports = {
  printHeader,
};
