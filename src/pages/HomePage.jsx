import AttendanceLog from "@/components/component/AtttendenceLog";
import CalendarSidebar from "@/components/component/CalendarSidebar";
import Header from "@/components/component/Header";

const HomePage = () => {
  return (
    <div className="flex-1 p-4">
      <Header />
      <div className="flex flex-col lg:flex-row justify-between">
        <AttendanceLog className="flex-1 mb-4 lg:mb-0" />
        <CalendarSidebar className="flex-1" />
      </div>
    </div>
  );
};

export default HomePage;
