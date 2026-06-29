const { ethers } = require("ethers");

function isValidAddress(address) {
  return ethers.isAddress(address);
}

function getCurrentTimestamp() {
  return new Date().toLocaleString();
}

module.exports = {
  isValidAddress,
  formatError,
  getCurrentTimestamp,
};

module.exports = {
  isValidAddress,
  formatError,
};
