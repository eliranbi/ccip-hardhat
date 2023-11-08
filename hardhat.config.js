require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    local:{
      url: 'http://127.0.0.1:8545/'
    },
    polygon:{
      url: 'https://polygon-mumbai.g.alchemy.com/v2/EfX5ainh3nViC7ntiNVkhz1Ldfl4lkjK',
      chainId: 80001,
      //public key - 0xeAE60618eF234fA356E5740aBe2B33A91C2CB9d4
      accounts:['e6e648ae8db12c63b4c119d95f1642885324820ffdcaee1b371bd4b39f73f123']
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/KRYDfLBGsGTXlAQe71NSq2MovqjgY3RK',
      chainId: 11155111,
      //private key - MetaMusk account -> export private key ...
      //public key - 0xC793DD377C936bfc7DFA50760c4aB34cBFBD5c36
      accounts: ['53f497fd5b7e23e128955c9adc9bc3a5ac098080e49f8dc89f46f1b67ac022bc']
    },
  }
};
