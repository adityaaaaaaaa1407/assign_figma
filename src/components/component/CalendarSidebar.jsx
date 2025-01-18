import CustomCalndar from "./CustomCalendar";

const data = [
  {
    title: "1 Jan, Mon 2025",
    day: "New Year's Day",
  },
  {
    title: "1 Jan, Mon 2025",
    day: "New Year's Day",
  },
  {
    title: "1 Jan, Mon 2025",
    day: "New Year's Day",
  },
  {
    title: "1 Jan, Mon 2025",
    day: "New Year's Day",
  },
];

const CalendarSidebar = () => {
  return (
    <div className="w-1/3 bg-white p-4 rounded-md shadow ">
      <div className="text-center px-4">
        <CustomCalndar />
      </div>

      {/* Upcoming Holidays */}
      <div className="mt-12 px-8">
        <div className="flex flex-row justify-between items-center mb-12">
          <h3 className="text-sm font-medium mb-2 text-[#0F172A]">
            Upcoming Holidays
          </h3>
          <h2 className="text-[#0F172A] underline font-medium text-[10px] cursor-pointer">
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
