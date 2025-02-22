import CustomCalndar from "./CustomCalendar";

const data = [
  {
    title: "1 Jan, Mon 2025",
    day: "New year's Day",
  },
  {
    title: "1 Jan, Mon 2025",
    day: "New year's Day",
  },
  {
    title: "1 Jan, Mon 2025",
    day: "New year's Day",
  },
  {
    title: "1 Jan, Mon 2025",
    day: "New year's Day",
  },
];

const CalendarSidebar = () => {
  return (
    <div>
      <div className=" sm:w-full w-[350px] bg-white lg:px-4 px-6 py-3 rounded-md  overflow-hidden">
        <CustomCalndar className="text-center " />
      </div>

      {/* Upcoming Holidays */}
      <div className="mt-8 lg:px-8 px-8 sm:w-full w-[350px] bg-white p-4 rounded-md  overflow-hidden">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-sm font-medium text-[#0F172A]">
            Upcoming Holidays
          </h3>
          <h2 className="text-[#0F172A] underline font-medium text-xs cursor-pointer">
            View All
          </h2>
        </div>
        <ul className="space-y-2">
          {data.map((holiday, index) => (
            <li key={index} className="text-sm text-gray-600">
              <div className="flex flex-row justify-between mb-12">
                <h2 className="text-xs text-[#0F172A] ">{holiday.title}</h2>
                <h2 className="text-xs text-[#64748B]">{holiday.day}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarSidebar;
