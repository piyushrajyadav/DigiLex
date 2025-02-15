export const blockchainConfig = {
    rpcUrl: process.env.BLOCKCHAIN_RPC_URL,
    chainId: process.env.CHAIN_ID || 80001, 
    contractAddresses: {
      daoFactory: process.env.DAO_FACTORY_ADDRESS
    }
  };