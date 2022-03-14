const providerMethods = {
  walletconnect: (providerOptions, id) => {
    const walletConnectData = providerOptions['walletconnect'];
    return new walletConnectData.package(walletConnectData.options);
  }
}

export default providerMethods;