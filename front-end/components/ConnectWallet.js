
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { useState, useRef, useEffect } from "react";

const ConnectWallet = () => {
  const web3ModalRef = useRef();
  const [walletConnected, setWalletConnected] = useState(false);
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // we check if the user is connected to the goerli testnet
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change your metamask wallet to goerli testnet");
      throw new Error("Change network to goerli");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "goerli",
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            
          }
        }
      },
      disableInjectedProvider: false,
    });
  }, []);

  return {getProviderOrSigner, walletConnected, setWalletConnected};
};

export default ConnectWallet;
