import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CustomCalndar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const changeMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = getDaysInMonth(month, year);

    const days = [];
    const leadingEmptyDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    for (let i = 0; i < leadingEmptyDays; i++) {
      days.push(
        <div key={`empty-${i}`} className="text-[#CBD5E1] font-medium"></div>
      );
    }

    for (let day = 1; day <= totalDays; day++) {
      const isToday =
        day === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();

      const isPast =
        new Date(year, month, day) < new Date(new Date().setHours(0, 0, 0, 0));
      const isFuture =
        new Date(year, month, day) > new Date(new Date().setHours(0, 0, 0, 0));

      days.push(
        <div
          key={day}
          className={`w-[30px] h-[30px] flex items-center justify-center rounded-full ${
            isToday
              ? "bg-[#0F172A] text-white font-medium"
              : isPast
              ? "text-gray-400"
              : isFuture
              ? "text-[#0F172A] font-medium"
              : "hover:bg-gray-200"
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-88 px-4  border rounded-lg ">
      <div className="flex items-center justify-between mb-6 mt-4">
        <h2 className="text-[16px] font-medium">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <div>
          <button
            onClick={() => changeMonth(-1)}
            className=" rounded-full hover:bg-gray-200"
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={() => changeMonth(1)}
            className=" rounded-full hover:bg-gray-200"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 py-6 text-center">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-[14.2px] text-[#0F172A] font-medium">
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default CustomCalndar;
