
import { GrSend} from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { ethers } from "ethers"
import { useState } from "react";

export default function Wallet() {
    
    const [walletAddress, setWallet] = useState(null);
    const [mnemonic, setMnemonic] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);

    function createWallet() {
        const wallet = ethers.Wallet.createRandom();
        setWallet(wallet.address);
        setPrivateKey(wallet.privateKey);
        setMnemonic(wallet.mnemonic);

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
                <p>0x3248402...</p>
                <button>....</button>
                </detailscontainer>

                <detailscontainer className="flex text-xl justify-between mt-7">
                <p>6493</p>
                <button>USD</button>
                </detailscontainer>

                <hr className="mt-2 mb-2"/>

                <detailscontainer className="flex justify-between pl-2 pr-2 mt-3">    
                <GrSend className="border-solid rounded-3xl border-2 w-10 h-10 p-2 bg-yellow-500 drop-shadow-2xl border-stone-600"/>
                <GiReceiveMoney className="border-solid rounded-3xl border-2 w-10 h-10 p-2 mr-2 bg-blue-400 drop-shadow-2xl border-stone-600" />
                </detailscontainer>

                <detailscontainer className="flex justify-between pl-2 pr-2 mt-1">    
                <button className="ml-1">Send</button>
                <button>Receive</button>
                </detailscontainer>
            </container>

            <detailscontainer className=" flex text-green text-xs justify-between m-2 mt-5 mr-12">
            <button className="bg-highlight rounded-xl px-2 py-1">Tokens</button>
            <button>Positions</button>
            <button>NFTs</button>
            </detailscontainer>

            <tokendetails>
            <detailscontainer className="flex text-sm justify-between mt-7">
            <p>ETH</p>
            <p>1200.09 USD</p>
            </detailscontainer>
            <detailscontainer className="flex text-gray-500 text-small justify-between">
            <p>Ethereum</p>
            <p>77.32 USD(1.96%)</p>
            </detailscontainer>
            </tokendetails>

            <tokendetails>
            <detailscontainer className="flex text-sm justify-between mt-3">
            <p>ETH</p>
            <p>1200.09 USD</p>
            </detailscontainer>
            <detailscontainer className="flex text-gray-500 text-small justify-between">
            <p>Ethereum</p>
            <p>77.32 USD(1.96%)</p>
            </detailscontainer>
            </tokendetails>

            <tokendetails>
            <detailscontainer className="flex text-sm justify-between mt-3">
            <p>ETH</p>
            <p>1200.09 USD</p>
            </detailscontainer>
            <detailscontainer className="flex text-gray-500 text-small justify-between">
            <p>Ethereum</p>
            <p>77.32 USD(1.96%)</p>
            </detailscontainer>
            </tokendetails>

            



        </div>
        </page>
    )
}