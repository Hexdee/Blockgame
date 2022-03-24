require('@nomiclabs/hardhat-waffle');
const secret = require('./secret.json');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: secret.url,
      accounts: [ secret.privateKey ]
    }
  },
  etherscan: {
    apiKey: secret.apiKey
  }
};
