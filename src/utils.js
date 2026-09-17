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

return error?.message?.trim() || "Something went wrong.";
}

function getCurrentTimestamp() {
return new Date().toISOString().replace("T", " ").split(".")[0];
}

function toChecksumAddress(address) {
  if (!isValidAddress(address)) {
    return null;
  }

  return ethers.getAddress(address.trim());
}
}


module.exports = {
  isValidAddress,
  formatError,
  getCurrentTimestamp,
  toChecksumAddress,
};
