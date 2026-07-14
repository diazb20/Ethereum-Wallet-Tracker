**Current Version:** 1.0.0
# Ethereum Wallet Tracker

A simple Ethereum wallet tracking application built with Node.js and Ethers.js.

## Features

- Check Ethereum wallet balance
- Validate wallet addresses
- Save checked wallets locally
- View recently checked wallets
- Display Ethereum network information
- Show latest Ethereum block number
- Improved error handling

- 
## Project Structure

```text
ethereum-wallet-tracker/
│
├── README.md
├── package.json
├── .gitignore
│
├── src/
│   ├── index.js
│   ├── wallet.js
│   └── utils.js
│
└── docs/
    └── roadmap.md
```

## Requirements

Before running the project, make sure you have:

- Node.js 18 or later
- npm
- Internet connection (required to access the Ethereum RPC endpoint)
## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/ethereum-wallet-tracker.git
cd ethereum-wallet-tracker
```

Install dependencies:

```bash
npm install
```

Install Ethers.js:

```bash
npm install ethers
```

## Usage

Run the application:
### Development

Run the project in development mode:

```bash
npm run dev
```

```bash
node src/index.js
```

Example:

```bash
Enter wallet address:
0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
```

Output:

```text
Wallet Address:
0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045

Balance:
123.45 ETH
```
## Installation

...

## Usage

Run the application:

```bash
npm start
```

### Using command-line arguments

You can also provide the wallet address directly when starting the application:

```bash
npm start -- 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
```

## Roadmap

...
## Roadmap

### Version 1.0
- [x] Initialize project
- [x] Setup Ethers.js
- [ ] Fetch wallet balance
- [ ] Validate wallet addresses

### Version 1.1
- [ ] Display recent transactions
- [ ] Better error handling

### Version 1.2
- [ ] Command line arguments
- [ ] Configuration file support

### Version 1.3
- [ ] Multiple wallet tracking
- [ ] Export wallet data

## Learning Goals

This project helps developers learn:

- Ethereum basics
- Blockchain APIs
- Ethers.js library
- JavaScript async programming
- Node.js project structure

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

## License

MIT License

## Author

Created for learning Ethereum development and blockchain programming.
## Environment Variables

Create a `.env` file based on `.env.example`.

Example:

```env
RPC_URL=https://eth.llamarpc.com
```
## Changelog

Project changes are documented in the `CHANGELOG.md` file.
