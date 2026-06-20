const { getBalance } = require("./wallet");
const { isValidAddress } = require("./utils");

async function main() {
  const walletAddress =
    "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

  if (!isValidAddress(walletAddress)) {
    console.error("Invalid Ethereum address");
    return;
  }

  try {
    const balance = await getBalance(walletAddress);

    console.log("Wallet:", walletAddress);
    console.log("Balance:", balance, "ETH");
  } catch (error) {
    console.error(error.message);
  }
}

main();
