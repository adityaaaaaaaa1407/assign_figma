import { Button } from "../ui/button";
import { CiCalendar } from "react-icons/ci";
import img from "/img.png";
const statsData = [
  {
    title: "Present Days",
    value: "15",
  },
  {
    title: "Total Leave Balance",
    value: "02",
  },
  {
    title: "Outstanding Anomalies",
    value: "03",
  },
  {
    title: "Avg Working Hours",
    value: "9hrs 30min",
  },
];
const Header = () => {
  return (
    <div className="flex flex-col gap-4 py-8 mb-4">
      <section className="flex items-center space-x-4 w-full justify-between mb-10 px-8">
        <div className="flex  flex-row gap-4 items-center">
          <div className="relative ">
            <img
              src={img}
              alt="Profile"
              className="h-[69px] w-[69px] rounded-full object-cover filter grayscale"
            />
            <span className="h-5 w-5 absolute left-[50px] top-[50px]  bg-green-500 rounded-full"></span>
          </div>

          <div>
            <h2 className=" font-medium text-xl text-[#0F172A] mb-1">Diana</h2>
            <p className="text-sm text-[#64748B]">diana@fluidesign.in</p>
          </div>
        </div>
        <div className="flex justify-end ">
          <Button className="bg-[#0F172A] font-semibold ">
            Selfie Clocks In{" "}
          </Button>
        </div>
      </section>
      <section className="flex flex-row gap-4 items-center justify-between  sm:px-[76px] px-2">
        <div className="flex flex-row items-center gap-2 ">
          <h2 className="text-[16px]">October</h2>
          <div className="text-xl text-black font-semibold">
            <CiCalendar />
          </div>
        </div>
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col">
            <h2 className="text-[#475569] text-[16px] mb-4 ">{stat.title}</h2>
            <span className="text-2xl text-[#0F172A]   font-medium">
              {stat.value}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Header;
