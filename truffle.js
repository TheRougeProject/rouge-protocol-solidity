module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 2000
    }
  },
  networks: {
    // local: {
    //   host: "localhost",
    //   port: 8545,
    //   network_id: "*" // Match any network id
    // },
    // sokol: {
    //   host: " https://sokol-trace.poa.network", //https://sokol.poa.network",
    //   port: 443,
    //   network_id: "*" // Match any network id
    // }
  }
};
