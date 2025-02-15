require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    amoy: {
      url: process.env.amoy_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env. POLYGONSCAN_API_KEY, //polygon-amoy.g.alchemy.com/v2/Mie9fOFmZ8G4UkZR3aZwS69JUvHt6j8j
  }
};