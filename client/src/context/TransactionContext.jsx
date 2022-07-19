import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAdress } from "../utils/constants.js";
export const TransactionContext = React.createContext();

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const singner = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAdress,
    contractABI,
    singner
  );
  
  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    adress: "",
    amount: "",
    message: "",
  });
  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const [currentAccount, setCurrentAccount] = useState();
  const checkWallet = async () => {
    if (!ethereum) return alert("Please install Metamask.");
    const accounts = await ethereum.request({ method: "eth_accounts" });

    console.log(accounts);
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask.");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ETH.");
    }
  };

  const sendTrans = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask.");
      const { adress, amount, message } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: adress,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionsContract.addToBlockchain(
        adressTo,
        amountTo,
        messageTo
      );
      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      console.log(`Success - ${transactionHash.hash}`);
      setIsLoading(false);
      const transactionsCount =
        await transactionsContract.getTransactionCount();
      setTransactionCount(transactionsCount.toNumber());
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error("No ETH.");
    }
  };

  useEffect(() => {
    checkWallet();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTrans,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
