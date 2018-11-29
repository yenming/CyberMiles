module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    travis: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      from :'0x7eff122b94897ea5b0e2a9abf47b86337fafebdc',
      gas: '4000000'
    }
  }
};
