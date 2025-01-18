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
    title: "Avg. Working Hours",
    value: "9hrs 30min",
  },
];
const Header = () => {
  return (
    <div className="flex flex-col gap-4 py-8 mb-4 sm:w-full w-[400px]">
      <section className="flex items-center space-x-4 justify-between  mb-[58px] sm:px-8 px-2 sm:w-full w-[400px]">
        <div className="flex  gap-4 items-center">
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
            Selfie Clock In{" "}
          </Button>
        </div>
      </section>
      <section className="sm:w-full w-[400px] flex sm:flex-row flex-col gap-4 items-center justify-between  sm:px-[76px] px-2">
        <div className="flex flex-row items-center gap-2 ">
          <h2 className="text-[16px] text-black">October</h2>
          <div className=" ">
            <CiCalendar className="text-2xl text-black font-semibold" />
          </div>
        </div>
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col ">
            <h2 className="text-[#475569] text-[16px] mb-4 ">{stat.title}</h2>
            <span className="text-2xl text-[#0F172A] sm:text-start text-center  font-medium">
              {stat.value}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Header;
