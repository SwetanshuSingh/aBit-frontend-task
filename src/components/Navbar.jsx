export default function Navbar(){
    return (
        <nav className="w-full h-[100px] bg-[url('./assets/images/navbar-bg.png')] bg-cover flex items-center justify-between px-[86px]">
            <h2 className="font-display font-bold text-lg text-[#292D32]">aBit</h2>
            <div className="icons flex justify-center items-center gap-5">
                <button className="border-2 border-[#764CC2] rounded-2xl px-3 py-1 text-[12px] text-[#764CC2] text-center font-raleway font-bold">Share new video</button>

                <div className="bg-[url('./assets/icons/wallet-icon.png')] w-7 h-7 bg-contain"></div>
                <div className="bg-[url('./assets/icons/notification-icon.png')] w-9 h-9 bg-contain"></div>
                <img className="h-8 w-8 object-contain" src="./profile.png" alt="" />
                <img className="h-6 w-6 object-contain" src="./menu.png" alt="" />
            </div>
        </nav>
    )
}