export default function Wallet() {
    return (
        <page className="flex justify-center m-20 sm:p-2 sm:m-2 text-black  ">
        <div 
        className="w-80 p-4 bg-white rounded-3xl h-12pro sm:w-screen border-solid border-stone-600 border-2" >
            <div className="flex text-sm mt-5 justify-between">
            <p>Your wallets</p>
            <button>Ethereum</button>
            </div>
            <container className="text-sm m-2 flex flex-col mt-10  bg-green-500 p-3 place-content-center rounded-xl border-solid ">

                <detailscontainer className="flex text-xs justify-between ">
                <p>0x3248402...</p>
                <button>....</button>
                </detailscontainer>

                <detailscontainer className="flex text-xl justify-between mt-5">
                <p>6493</p>
                <button>USD</button>
                </detailscontainer>

                <hr className="mt-2 mb-2"/>

                <detailscontainer className="flex justify-between pl-2 pr-2 mt-5">
                <button>Send</button>
                <button>Receive</button>
                </detailscontainer>

            </container>
        </div>
        </page>
    )
}

{/* <balance className="flex justify-between bg-yellow-300">
                    <p>4,383.94</p>
                    <p>USD</p>
                </balance> */}