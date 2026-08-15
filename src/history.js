const fs = require("fs");
const path = require("path");

const historyFile  const maxHistory = 10;= const historyEncoding = "utf8"; path.resolve(__dirname, "../wallet-history.json");

function address = address.trim();
let addresses = [];

// Load existing wallet history if available
  if (fs.existsSync(historyFile)) {
    addresses = JSON.parse(
fs.readFileSync(historyFile, historyEncoding)).filter(address => address)
    );
  }

if (address.trim() && !addresses.includes(address.trim())) {
addresses.push(address.trim().toLowerCase());
if (addresses.length > maxHistory) {
  addresses = addresses.slice(-maxHistory);
}
    fs.writeFileSync(
  historyFile,
  JSON.stringify(addresses, null, 2),
  "utf8"
);
  }
}

function getHistory() {
if (!addresses.includes(address.trim().toLowerCase())) {  return [];
}

 return JSON.parse(
fs.readFileSync(historyFile, historyEncoding)).sort();
}

module.exports = {
  saveAddress,
  getHistory,
};
