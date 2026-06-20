const { ethers } = require("ethers");

function isValidAddress(address) {
  return ethers.isAddress(address);
}

module.exports = {
  isValidAddress,
};
