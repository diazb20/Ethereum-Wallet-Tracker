const { ethers } = require("ethers");
const config = require("./config");

const provider = new ethers.JsonRpcProvider(config.rpcUrl);
async function getNetworkInfo() {
  const network = await provider.getNetwork();

  return {
    name: network.name,
    chainId: network.chainId.toString(),
  };
}

async function getLatestBlockNumber() {
  try {
    return await provider.getBlockNumber();
  } catch (error) {
    throw new Error("Failed to fetch latest block number");
  }
}

module.exports = {
  getBalance,
  getNetworkInfo,
  getLatestBlockNumber,
  getTransactionCount,
};

async function getBalance(address) {
  try {
    const balance = await provider.getBalance(address);

    return {
      wei: balance.toString(),
      eth: ethers.formatEther(balance),
    };
  } catch (error) {
    throw new Error("Failed to fetch wallet balance");
  }
}

async function getTransactionCount(address) {
  try {
    return await provider.getTransactionCount(address);
  } catch (error) {
    throw new Error("Failed to fetch transaction count");
  }
}
