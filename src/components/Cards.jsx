export default function Cards() {
  return (
    <div className=" w-full px-[86px] flex items-center gap-10 mb-11">
      <div className="card bg-[#D8D8D8] text-gray-400 w-[284px] h-[312px] rounded-3xl flex flex-col items-center justify-end p-8">
        <i className="ri-add-fill text-4xl"></i>
        <p className="font-display text-center text-sm tracking-wide mt-20">You haven&apos;t uploaded any videos with aBit yet. Add now!</p>
      </div>

      <div className=" w-[284px] h-[320px] bg-[url(./assets/images/card.png)] bg-cover bg-center rounded-3xl font-display p-6 flex flex-col justify-between">
        <h2 className="text-white font-bold text-xl">The Sound of Silence</h2>
        <div className="w-full h-[54px] bg-[#FFFFFF33] rounded-xl flex justify-around items-center">
            <div className="text-white text-center">
                <h3 className="text-[12px] font-medium">Shares</h3>
                <p className="text-[14px] font-bold">317</p>
            </div>

            <div className="text-white text-center">
                <h3 className="text-[12px] font-medium">Offered</h3>
                <p className="text-[14px] font-bold">75%</p>
            </div>

            <div className="text-white text-center">
                <h3 className="text-[12px] font-medium">Raised</h3>
                <p className="text-[14px] font-bold">$9510</p>
            </div>
        </div>
      </div>

    </div>
  );
}