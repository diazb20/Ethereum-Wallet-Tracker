const { ethers } = require("ethers");

function isValidAddress(address) {
return (
  typeof address === "string" &&
  address.trim() !== "" &&
ethers.isAddress(address.trim())
);
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
  return ethers.getAddress(address.trim());
}


module.exports = {
  isValidAddress,
  formatError,
  getCurrentTimestamp,
  toChecksumAddress,
};
