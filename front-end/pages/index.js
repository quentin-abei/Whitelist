import Head from "next/head";
import styles from "../styles/Home.module.css";
import web3Modal from "web3modal";
import { useState, useRef, useEffect } from "react";
import { providers, Contract } from "ethers";
import { WHITELIST_CONTRACT_ADDRESS, abi } from "../constants";
import ConnectWallet from "../components/ConnectWallet";
import JoinWhitelist from "../components/JoinWhitelist";

export default function Home() {
  const { getProviderOrSigner, walletConnected, setWalletConnected } =
    ConnectWallet();
  const {
    addAddressToWhitelist,
    getNumberOfWhitelisted,
    joinedWhitelist,
    loading,
    numberOfWhitelisted,
    setJoinedWhitelist,
  } = JoinWhitelist({ getProviderOrSigner });

  const renderButton = () => {
    if (walletConnected) {
      if (joinedWhitelist) {
        return (
          <div className={styles.description}>
            Thanks for joining the Whitelist!
          </div>
        );
      } else if (loading) {
        return <button className={styles.button}>Loading...</button>;
      } else {
        return (
          <button onClick={addAddressToWhitelist} className={styles.button}>
            Join the Whitelist
          </button>
        );
      }
    } else {
      return (
        <button onClick={() => ConnectWallet} className={styles.button}>
          Connect your wallet
        </button>
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Whitelist Dapp</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to Crypto Devs!</h1>
          <div className={styles.description}>
            Its an NFT collection for developers in Crypto.
          </div>
          <div className={styles.description}>
            {numberOfWhitelisted} have already joined the Whitelist
          </div>
          {renderButton()}
        </div>
      </div>

      <footer className={styles.footer}>
        Made with &#10084; by Crypto Devs
      </footer>
    </div>
  );
}
