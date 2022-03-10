const providerMethods = {
  walletconnect: (providerOptions, id) => {
    const walletConnectData = providerOptions[id];
    return new walletConnectData.package(walletConnectData.options);
  }
}

export default providerMethods;