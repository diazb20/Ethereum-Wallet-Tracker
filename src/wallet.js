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

async function getNetworkInfo() {
  const network = await provider.getNetwork();

  return {
    name: network.name,
    chainId: network.chainId.toString(),
  };
}

module.exports = {
  getBalance,
  getNetworkInfo,
  getLatestBlockNumber,
};

async function getLatestBlockNumber() {
  try {
    const blockNumber = await provider.getBlockNumber();
    return blockNumber;
  } catch (error) {
    throw new Error("Failed to fetch latest block number");
  }
}
try {
  const latestBlock = await getLatestBlockNumber();

  console.log("Latest Block:", latestBlock);
  console.log("");
} catch (error) {
  console.log("Unable to retrieve latest block number");
}
