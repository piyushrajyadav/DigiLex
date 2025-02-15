import { useState, useEffect } from "react";
import { ethers } from "ethers";

const useWeb3 = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState("");

  // Connect to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const account = await signer.getAddress();

        setProvider(provider);
        setSigner(signer);
        setAccount(account);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0] || "");
      });
    }
  }, []);

  return { provider, signer, account, connectWallet };
};

export default useWeb3;