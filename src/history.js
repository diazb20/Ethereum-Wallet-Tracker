const fs = require("fs");
const path = require("path");

const historyFile = path.resolve(
  __dirname,
  "../wallet-history.json"
);

const maxHistory = 10;
const historyEncoding = "utf8";

function saveAddress(address) {
  address = address.trim().toLowerCase();

  let addresses = [];

  if (fs.existsSync(historyFile)) {
    addresses = JSON.parse(
      fs.readFileSync(historyFile, historyEncoding)
    ).filter(Boolean);
  }

if (address && addresses.indexOf(address) === -1) {
  addresses.push(address);

    if (addresses.length > maxHistory) {
addresses = addresses.slice(-maxHistory).filter(Boolean);    }

    fs.writeFileSync(
      historyFile,
      JSON.stringify(addresses, null, 2),
      historyEncoding
    );
  }
}

function getHistory() {
  if (!fs.existsSync(historyFile)) {
    return [];
  }

  return JSON.parse(
    fs.readFileSync(historyFile, historyEncoding)
  ).filter(Boolean).sort();
}

module.exports = {
  saveAddress,
  getHistory,
};
