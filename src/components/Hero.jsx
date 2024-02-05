import Cards from "./Cards";
import DashboardStats from "./ui/DashboardStats";
import ProfileCard from "./ui/ProfileCard";

export default function Hero(){
    return <div className="w-full">
        <img className="w-full h-[548px] object-cover object-top" src="./images/hero-banner.png" alt="" />
        <img className="w-full h-28" src="./images/hero-strip.png" alt="" />
        <div className=" absolute top-[567px] left-[90px]">
            <ProfileCard />
        </div>
        <DashboardStats />
        <Cards />
    </div>
}