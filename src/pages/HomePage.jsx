import AttendanceLog from "@/components/component/AtttendenceLog";
import CalendarSidebar from "@/components/component/CalendarSidebar";
import Header from "@/components/component/Header";

const HomePage = () => {
  return (
    <div className="flex-1">
      <Header />
      <div className="flex flex-col lg:flex-row justify-between">
        <AttendanceLog className="flex-1 mb-4 lg:mb-0" />
        <CalendarSidebar className="flex-[0.4] min-w-[320px]" />
      </div>
    </div>
  );
};

export default HomePage;
