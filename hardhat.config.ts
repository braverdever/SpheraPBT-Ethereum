require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");

const { HardhatUserConfig } = require("hardhat/config");
dotenv.config();

const { PRIVATE_KEY, NETWORK } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.13",
};
const config = {
  solidity: {
    version: "0.8.13",
    settings: {
      viaIR: false,
      optimizer: {
        enabled: true,
        runs: 500,
      },
    },
  },
  mocha: {
    timeout: 3600000,
  },
  defaultNetwork: NETWORK,
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 11155111,
    },
  },

  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY || "",
    },
  },
};

module.exports = config;
