// import WalletConnect from "@walletconnect/web3-provider";
import metaMaskLogo from '../logos/metamask.svg';
import walletConnectLogo from '../logos/walletconnect.svg';

const rawListOfWalletsArray = [
  {
    htmlId: 'lcm-metaMask',
    id: 'metamask',
    logo: metaMaskLogo,
    name: 'MetaMask',
    provider: window.ethereum,
    synopsis: 'Connect your MetaMask Wallet',
    checkIfPresent: () => {
      if (typeof window.ethereum !== 'undefined') {
        return true;
      } else {
        return false;
      }
    }
  }, {
    htmlId: 'lcm-walletConnect',
    id: 'walletconnect',
    logo: walletConnectLogo,
    name: 'Wallet Connect',
    provider: null,
    synopsis: 'Scan with WalletConnect to connect',
  }
]

export default rawListOfWalletsArray;