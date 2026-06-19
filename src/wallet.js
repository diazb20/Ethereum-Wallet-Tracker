const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(
  "https://eth.llamarpc.com"
);

async function getBalance(address) {
  try {
    const balance = await provider.getBalance(address);

    return ethers.formatEther(balance);
  } catch (error) {
    throw new Error("Failed to fetch wallet balance");
  }
}

module.exports = {
  getBalance,
};
