const { isValidAddress, formatError } = require("./utils");
const readline = require("readline");
const { getBalance } = require("./wallet");
const { isValidAddress } = require("./utils");
const { saveAddress, getHistory } = require("./history");
const { printHeader } = require("./logger");

printHeader();

const history = getHistory();

if (history.length > 0) {
  console.log("Recently Checked Wallets:");
  history.slice(-5).forEach((address, index) => {
    console.log(`${index + 1}. ${address}`);
  });

  console.log("");
}

const {
  isValidAddress,
  formatError,
  getCurrentTimestamp,
} = require("./utils");

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

    saveAddress(walletAddress);
  } catch (error) {
  console.error("Error:", formatError(error));
}

  rl.close();
});
