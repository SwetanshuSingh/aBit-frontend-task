export default function Footer(){
    return (
        <footer className=" border-t border-[#D8D8D8] w-full p-[135px] mt-44 flex justify-between items-center">
            <div className="font-display">
                <h2 className="text-4xl font-bold text-[#262626] mb-4">aBit</h2>
                <p className=" font-serif">Changing The Way In Which</p>
                <p className="font-serif">Creators And Fans Interact.</p>
            </div>

            <div className="font-display flex flex-col gap-3 border-l border-gray-400 px-4">
                <h2 className="text-[#262626FC] text-lg font-bold">Home</h2>
                <h2 className="text-[#262626FC] text-lg font-bold">Are you a creator?</h2>
                <h2 className="text-[#262626FC] text-lg font-bold">Support</h2>
            </div>
        </footer>
    )
}