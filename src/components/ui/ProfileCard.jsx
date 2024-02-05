export default function ProfileCard(){
    return (
        <div className="w-[571px] h-[234px] flex rounded-3xl shadow-xl">
            <div className="img-area h-full w-[40%] bg-[url(./assets/images/profile.png)]"></div>
            <div className="text-area h-full w-[60%] bg-cover bg-center bg-[url('./assets/images/cover-img.jpg')] rounded-r-2xl py-8 px-10 border-l-2 border-black box-border font-display flex flex-col justify-between">

                <div className="flex justify-between items-start">
                    <h2 className="font-display uppercase font-bold text-2xl">Dan Mace</h2>
                    <p className="text-[#696969] text-[14px]">/Jhonny_Films/</p>
                </div>

                <div className="text-[14px] text-[#696969]">
                    <h3 className="font-bold">Bio</h3>
                    <p>Simply a fan creating original content for Youtube. Let&apos;s Collaborate</p>
                </div>

                <div className="w-[256px] h-[29px] border border-black rounded flex bg-[#000000A6]">
                    <div className="w-[50%] h-full bg-cover bg-center bg-[url('./assets/images/cover-img.jpg')] border-r border-black rounded flex justify-center items-center">
                        <p className="text-[14px] text-center font-serif tracking-wide">Creator</p>
                    </div>
                    <div className="w-[50%] h-full"></div>
                </div>

            </div>
        </div>
    )
}