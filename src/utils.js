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

module.exports = {
  isValidAddress,
  formatError,
};
