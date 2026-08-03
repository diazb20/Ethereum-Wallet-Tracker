const readline = require("readline");

const { getBalance, getNetworkInfo } = require("./wallet");
const { saveAddress, getHistory } = require("./history");
const { printHeader } = require("./logger");
const { isValidAddress, formatError } = require("./utils");

printHeader();

const history = getHistory();

if (history.length > 0) {
  console.log("Recently Checked Wallets:");

  history.slice(-5).forEach((address, index) => {
    console.log(`${index + 1}. ${address}`);
  });

  console.log("");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter Ethereum wallet address: ", async (walletAddress) => {
  if (!walletAddress.trim()) {
    console.log("Please enter a wallet address.");
    rl.close();
    return;
  }

  if (!isValidAddress(walletAddress)) {
console.error("Please enter a valid Ethereum wallet address.");
    rl.close();
    return;
  }

  try {
    console.log("Connecting to Ethereum network...");

    const balance = await getBalance(walletAddress);

    console.log("\nWallet:", walletAddress);
    console.log(
      "Balance:",
      Number(balance.eth).toFixed(4),
      "ETH"
    );

    saveAddress(walletAddress);
  } catch (error) {
    console.error("Error:", formatError(error));
  }

  rl.close();
});
