
import { GrSend} from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";

export default function Wallet() {
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
            <button className="bg-highlight rounded-xl px-2 py-1">Positions</button>
            <button className="bg-highlight rounded-xl px-2 py-1">NFTs</button>
            </detailscontainer>
        </div>
        </page>
    )
}

{/* <balance className="flex justify-between bg-yellow-300">
                    <p>4,383.94</p>
                    <p>USD</p>
                </balance> */}

                // <detailscontainer className="flex justify-between pl-2 pr-2 mt-5">
                    
                // <button>
                // <GiReceiveMoney className="flex justify-center w-10 mb-2" />
                // Send
                // </button>
                // <button>
                // <GiReceiveMoney className="flex justify-center w-10 mb-2" />
                //     Receive
                //     </button>
                // </detailscontainer>