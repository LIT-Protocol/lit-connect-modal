const providerMethods = {
  walletconnect: async (providerOptions, id) => {
    const walletConnectData = providerOptions.walletconnect;
    const opts = walletConnectData.options;

    const WalletConnectProvider = walletConnectData.package;

    return await WalletConnectProvider.init(opts);
  },
};

export default providerMethods;
