// https://eth-mainnet.g.alchemy.com/v2/RBEVxGRolBuMZDQNO_TfwcPPelaYm7M1

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.15',
  networks: {
    ropsten: {
      url: 'https://ropsten.etherscan.io/tx/0x5ff88ef92cf9fde493d3d3e6f2d1087364ed00c261344da595771a1f9c0db2f5',
      accounts: ['967124c9457699e10b650ae0c539cb3c45eb0e5bb5b39ae8f28369033b44d934'],
    },
  },
};