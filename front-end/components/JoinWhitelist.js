import React from "react";
import { providers, Contract } from "ethers";
import { useState, useEffect } from "react";
import { WHITELIST_CONTRACT_ADDRESS, abi } from "../constants";
import ConnectWallet from "./ConnectWallet";

const JoinWhitelist = ({ getProviderOrSigner }) => {
  const [joinedWhitelist, setJoinedWhitelist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [numberOfWhitelisted, setNumberOfWhitelisted] = useState(0);

  const addAddressToWhitelist = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract(
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        signer
      );

      const tx = await whitelistContract.addAddressToWhitelist();
      setLoading(true);
      await tx.wait();
      setLoading(false);
      await getNumberOfWhitelisted();
      setJoinedWhitelist(true);
    } catch (err) {
      console.error(err);
    }
  };

  const getNumberOfWhitelisted = async () => {
    try {
      const provider = await getProviderOrSigner();
      const whitelistContract = new Contract(
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        provider
      );
      setNumberOfWhitelisted(await whitelistContract.numAddressesWhitelisted());
    } catch (err) {
      console.error(err);
    }
  };
  return {
    addAddressToWhitelist,
    getNumberOfWhitelisted,
    joinedWhitelist,
    loading,
    numberOfWhitelisted,
    setJoinedWhitelist,
  };
};

export default JoinWhitelist;
