import Wallet from './Wallet';
import React from 'react';
import { ethers } from "ethers"
import { useState, useEffect } from "react";

function App() {


  const [page, setPage] = useState(true);
  const [wallet, setWallet] = useState(null);
  const [privateKey, setPrivateKey] = useState(null);
  let privKey
  const handleChange = (event) => {
    privKey = event.target.value;
  }

  const handleSubmit = () => {
    console.log(privKey);
    setPrivateKey(privKey)
  }


  console.log(privateKey)


  function walletImport() {
    setPage(!page);
  }

 function IntroPage() {
  return (
    <page className=" text-white flex justify-center m-20 sm:p-2 sm:m-2 ">
        <div 
        className="w-80 p-4 bg-3 bg-cover rounded-3xl h-12pro sm:w-screen" >
            <div className="flex place-content-end text-sm">
            <button className="mt-5">Skip</button>
            </div>
            {page && <div>
            <h1 className="text-3xl mt-20">Set up your wallet</h1>
            <p className="w-64 mb-5 mt-2">Import your wallet using seed phrase or set up a new one </p>
            <container className="text-sm flex mt-20">
                <box1 className=" p-10 rounded-xl bg-wallet bg-cover border-solid border-stone-600 border-2">
                    <h2 onClick={walletImport}>Import your wallet</h2>
                </box1>
                <box2 className=" ml-4 p-10 rounded-xl bg-import bg-cover border-solid border-stone-600 border-2">
                    <h2 >Set up a new wallet</h2>
                </box2>
            </container>
            </div> }
            {!page && <div>
            <div className='text-center'> 
            <h1 className="text-3xl mt-20 ">Import your wallet</h1>
            <p className="w-64 mb-5 mt-2 ">Import your wallet using seed phrase</p>
            </div>
            <container className="text-sm flex justify-center mt-5"> 
            <box1 className=" p-10 rounded-xl bg-wallet bg-cover border-solid border-stone-600 border-2 flex flex-col">
              <input className='text-center text-black' type="text" onChange={handleChange()}></input>
              <button className="text-xs rounded bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 p-1" onClick={handleSubmit()}>Import</button>
            </box1>
            </container>
            <div className='flex justify-center mt-10 text  '> 
            <button onClick={walletImport} className='text-center px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl '>Go Back</button>
            </div>
            </div>
             }
        </div>
        </page>
  )
 }




  return (
    <div>
      <IntroPage />
    {/* {page && <IntroPage />}
    {!page && <Wallet walletImport={walletImport} />} */}
    </div>
  );
}

export default App;
