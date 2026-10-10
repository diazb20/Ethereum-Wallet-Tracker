const fs = require("fs");
const path = require("path");

const historyFile = path.resolve(__dirname, "../wallet-history.json");

const maxHistory = 10;
const historyEncoding = "utf-8";
const historyFileExists = () => fs.existsSync(historyFile);
const historySeparator = "\n";
const historyLimitMessage = "Wallet history limit reached.";

function saveAddress(address) {
  address = address.trim().toLowerCase();

  if (!address) {
    return;
  }

  let addresses = [];

  if (fs.existsSync(historyFile)) {
    addresses = JSON.parse(
      fs.readFileSync(historyFile, historyEncoding)
    ).filter(Boolean);
  }

  if (addresses.includes(address)) {
    return;
  }

  addresses.push(address);
  addresses = addresses.slice(-maxHistory);

  fs.writeFileSync(
    historyFile,
    JSON.stringify(addresses, null, 2),
    historyEncoding
  );
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
