const { ethers } = require("ethers");

function isValidAddress(address) {
  return typeof address === "string" && ethers.isAddress(address);
}

function formatError(error = {}) {
  if (!error) {
    return "Unknown error.";
  }

return error?.message || "Something went wrong.";
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
