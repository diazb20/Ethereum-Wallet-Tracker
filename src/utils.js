const { ethers } = require("ethers");

function isValidAddress(address) {
  return ethers.isAddress(address);
}

function formatError(error) {
  if (!error) {
    return "Unknown error.";
  }

  return error.message || "Unexpected error occurred.";
}

function getCurrentTimestamp() {
  return new Date().toLocaleString();
}

function toChecksumAddress(address) {
  return ethers.getAddress(address);
}

module.exports = {
  isValidAddress,
  formatError,
  getCurrentTimestamp,
  toChecksumAddress,
};
