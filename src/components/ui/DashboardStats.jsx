export default function DashboardStats(){
    return (
        <div className="w-full h-[75px] p-[86px] flex font-display my-10">
            <div className="releases w-[50%] h-full flex flex-col justify-between gap-1">
                <h2 className=" text-[28px] font-normal font-serif">Releases</h2>
                <p className=" text-[16px] text-[#565656] font-serif italic tracking-wide">Videos that you upload here in collaboration with aBit appear here</p>
            </div>

            <div className="stats w-[50%] h-[75px] flex justify-between items-center">
                <div className="border-l border-[#7A7A7A] h-full flex flex-col justify-between gap pl-4">
                    <h2 className="text-[#565656] font-bold">1</h2>
                    <div className="text-[#696969]">
                        <p>Shared</p>
                        <p>Videos</p>
                    </div>
                </div>

                <div className="border-l border-[#7A7A7A] h-full flex flex-col justify-between gap pl-4">
                    <h2 className="text-[#565656] font-bold">$9510</h2>
                    <div className="text-[#696969]">
                        <p>Funds</p>
                        <p>Raised</p>
                    </div>
                </div>

                <div className="border-l border-[#7A7A7A] h-full flex flex-col justify-between gap pl-4">
                    <h2 className="text-[#565656] font-bold">317</h2>
                    <div className="text-[#696969]">
                        <p>Co-owner</p>
                        <p>Community</p>
                    </div>
                </div>

                <div className="border-l border-[#7A7A7A] h-full flex flex-col justify-between gap pl-4">
                    <h2 className="text-[#565656] font-bold">$3804</h2>
                    <div className="text-[#696969]">
                        <p>Co-owner</p>
                        <p>Earnings</p>
                    </div>
                </div>
            </div>

        </div>
    )
}