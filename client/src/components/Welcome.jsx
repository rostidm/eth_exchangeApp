import React, {useContext} from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-inv  text-white border-b-2 text-tiny white-glassmorphism"
    />
  );
const Welcome = () => {

  const {connectWallet, currentAccount,formData, setFormData, handleChange, sendTrans} = useContext(TransactionContext);
 const handleSubmit = (e) =>{
  const {adress, amount, message} = formData;
  e.preventDefault();
  if(!adress || !amount || !message) return;
  sendTrans();
 }
  
  return (
    <div className="lg:flex position: relative  justify-between">
      <div className=" md:flex  ">
        <div className="flex md:flex-row flex-col items-start justify-between lg:pl-60 lg:mt-60 sm:mt-10 px-5">
          <div className="flex flex-1 items-start flex-col md:mr-10 ">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 ">
              Endless <br /> Possibilities With{" "}
              <h1 className="font-pixel text-white pt-2 ">BLOCKchain.</h1>
            </h1>
            <p className="text-left sm:mt-0 lg:mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              Explore the crypto world. Buy and sell cryptocurrencies easily.
            </p>
            {!currentAccount && <button onClick={connectWallet} type="button" className="flex flex-row justify-center items-center mt-5 border font-sans pr-5 pl-3 pt-1 pb-1 cursor-pointer text-white hover:bg-white hover:bg-opacity-5 hover:shadow-sh hover:shadow-inner transition-all">
              <FaConnectdevelop className="text-white mr-2" />
              Connect Wallet
            </button>}
          </div>
        </div>
      </div>
      <div className=" lg:mt-60 lg:mr-60 justify-center ">
        <div className="flex flex-col flex-1 sm:ml-5 ">
          <div className="p-3 flex  justify-end items-start flex-col rounded-xl h-40 w-72  my-5 border border-white">
            <div className="h-full">
              <p className="text-white font-light text-sm">
              {shortenAddress(currentAccount)}
              </p>
            </div>
            <div className="flex items-center">
              <FaEthereum fontSize={21} color="#fff" />
              <p className="text-white font-semibold text-lg mt-1 pl-2">
                Ethereum
              </p>
            </div>
          </div>
          <div className="border flex-col flex  p-5 border-white rounded-xl w-72">
            <Input placeholder="Adress" name="adress" type="text" handleChange={handleChange}/>
            <Input placeholder="Amount" name="amount" type="number" handleChange={handleChange}/>
            <Input placeholder="Message" name="message" type="text" handleChange={handleChange}/>
            <button onClick={handleSubmit} className="w-full border mt-5 cursor-pointer text-white hover:bg-white hover:bg-opacity-5 hover:shadow-sh hover:shadow-inner transition-all">Submit</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Welcome;
