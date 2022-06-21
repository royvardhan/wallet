export default function WelcomePage() {
    return (
        <page className="flex justify-center p-20 sm:p-10 ">
        <div className="w-80 bg-black p-4 rounded-3xl h-12pro sm:w-screen">
            <div className="flex place-content-end text-sm">
            <button className="">Skip</button>
            </div>
            <h1 className="text-3xl">Set up your wallet</h1>
            <p className="w-64 mb-5">Import your wallet using seed phrase or set up a new one </p>
            <container className="text-sm flex">
                <box1 className=" p-10 rounded-xl bg-yellow-100">
                    <h2 >Import your wallet</h2>
                </box1>
                <box2 className=" ml-4 p-10 rounded-xl bg-yellow-100">
                    <h2 >Set up a new wallet</h2>
                </box2>
            </container>
        </div>
        </page>
    )
}