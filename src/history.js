const fs = require("fs");
const path = require("path");

const historyFile = path.join(__dirname, "../wallet-history.json");

function saveAddress(address) {
  let addresses = [];

  if (fs.existsSync(historyFile)) {
    addresses = JSON.parse(
      fs.readFileSync(historyFile, "utf8")
    );
  }

  if (!addresses.includes(address.trim())) {
    addresses.push(address.trim());

    fs.writeFileSync(
      historyFile,
      JSON.stringify(addresses, null, 2)
    );
  }
}

function getHistory() {
  if (!fs.existsSync(historyFile)) {
    return [];
  }

 return JSON.parse(
  fs.readFileSync(historyFile, "utf8")
).sort();
}

module.exports = {
  saveAddress,
  getHistory,
};
