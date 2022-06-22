
export default function WelcomePage() {
    return (
        <page className="flex justify-center m-20 sm:p-2 sm:m-2 ">
        <div 
        className="w-80 p-4 bg-3 bg-cover rounded-3xl h-12pro sm:w-screen" >
            <div className="flex place-content-end text-sm">
            <button className="mt-5">Skip</button>
            </div>
            <h1 className="text-3xl mt-20">Set up your wallet</h1>
            <p className="w-64 mb-5 mt-2">Import your wallet using seed phrase or set up a new one </p>
            <container className="text-sm flex mt-20">
                <box1 className=" p-10 rounded-xl bg-wallet bg-cover border-solid border-stone-600 border-2">
                    <h2 >Import your wallet</h2>
                </box1>
                <box2 className=" ml-4 p-10 rounded-xl bg-import bg-cover border-solid border-stone-600 border-2">
                    <h2 >Set up a new wallet</h2>
                </box2>
            </container>
        </div>
        </page>
    )
}