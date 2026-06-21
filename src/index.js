const readline = require("readline");
const { getBalance } = require("./wallet");
const { isValidAddress } = require("./utils");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter Ethereum wallet address: ", async (walletAddress) => {
  if (!isValidAddress(walletAddress)) {
    console.error("Invalid Ethereum address");
    rl.close();
    return;
  }

  try {
    const balance = await getBalance(walletAddress);

    console.log("\nWallet:", walletAddress);
    console.log("Balance:", balance, "ETH");
  } catch (error) {
    console.error(error.message);
  }

  rl.close();
});
