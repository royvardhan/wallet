
import { GrSend} from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { ethers } from "ethers"
import { useState, useEffect } from "react";

export default function Wallet() {
    
    
    const [mnemonic, setMnemonic] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);
    const [walletAddress, setWallet] = useState(function checkWallet() {
        if (!mnemonic) {const wallet = ethers.Wallet.createRandom();
            setPrivateKey(wallet.privateKey);
            setMnemonic(wallet.mnemonic);
            return wallet.address}
    });
    const [balance, setBalance] = useState(0);



    const wallet = "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae"
    const shortWallet = wallet.substring(0, 6) + "..." + wallet.substring(wallet.length - 4, wallet.length);
    const etherscanApiKey = "FRSY1R3HCHWGUICNM54XYZ3Q8PK1PITJAR"
   
   
        async function getEthPrice () {
            const response = await fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${etherscanApiKey}`);
            const data = await response.json()
            const fixedDecimal = (data.result.ethusd * 1).toFixed(2)
            return fixedDecimal
        }
        
        async function getBalance () {
        const provider = await ethers.getDefaultProvider()
        const balance = await provider.getBalance(wallet);
        const balanceInEth = await ethers.utils.formatEther(balance)
        const ethUsd = await getEthPrice()
        const balanceInUsd = (balanceInEth * ethUsd).toFixed(2)
        setBalance(balanceInUsd)
        }
        


    return (
        <page className="flex justify-center m-20 sm:p-2 sm:m-2 text-black  ">
        <div 
        className="w-80 p-4 bg-white rounded-3xl h-12pro sm:w-screen border-solid border-stone-600 border-2" >
            <div className="flex text-sm mt-5 justify-between">
            <p>Your wallets</p>
            <button>Ethereum</button>
            </div>
            <container className="text-sm m-2 flex flex-col mt-10  bg-green p-4 place-content-center rounded-xl border-solid">

                <detailscontainer className="flex text-xs justify-between">
                <p>{shortWallet}</p>
                <button>....</button>
                </detailscontainer>

                <detailscontainer className="flex text-xl justify-between mt-7">
                <p onLoad={getBalance()}>{balance}</p>
                <button>USD</button>
                </detailscontainer>

                <hr className="mt-2 mb-2"/>

                <detailscontainer className="flex justify-between pl-2 pr-2 mt-3">    
                <GrSend className="border-solid rounded-3xl border-2 w-10 h-10 p-2 bg-yellow-500 drop-shadow-2xl border-stone-600"/>
                <GiReceiveMoney className="border-solid rounded-3xl border-2 w-10 h-10 p-2 mr-2 bg-blue-400 drop-shadow-2xl border-stone-600" />
                </detailscontainer>

                <detailscontainer className="flex justify-between pl-2 pr-2 mt-1">    
                <button onClick={getBalance} className="ml-1">Send</button>
                <button >Receive</button>
                </detailscontainer>
            </container>

            <detailscontainer className=" flex text-green text-xs justify-between m-2 mt-5 mr-12">
            <button className="bg-highlight rounded-xl px-2 py-1">Tokens</button>
            <button>Positions</button>
            <button>NFTs</button>
            </detailscontainer>

            <tokendetails>
            <detailscontainer className="flex text-sm justify-between mt-7">
            <p>BTC</p>
            <p>20868 USD</p>
            </detailscontainer>
            <detailscontainer className="flex text-gray-500 text-small justify-between">
            <p>Bitcoin</p>
            <p>34 USD(-1.90%)</p>
            </detailscontainer>
            </tokendetails>

            <tokendetails>
            <detailscontainer className="flex text-sm justify-between mt-3">
            <p>ETH</p>
            <p>1202.09 USD</p>
            </detailscontainer>
            <detailscontainer className="flex text-gray-500 text-small justify-between">
            <p>Ethereum</p>
            <p>399.32 USD(1.96%)</p>
            </detailscontainer>
            </tokendetails>

            <tokendetails>
            <detailscontainer className="flex text-sm justify-between mt-3">
            <p>BNB</p>
            <p>237.9 USD</p>
            </detailscontainer>
            <detailscontainer className="flex text-gray-500 text-small justify-between">
            <p>Binance</p>
            <p>4.7 USD(2%)</p>
            </detailscontainer>
            </tokendetails>

            



        </div>
        </page>
    )
}