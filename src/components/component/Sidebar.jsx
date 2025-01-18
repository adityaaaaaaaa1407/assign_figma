import { FiHome, FiHelpCircle, FiLogOut } from "react-icons/fi";
import { FaListCheck } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { LuBuilding } from "react-icons/lu";
import { LuUserCog } from "react-icons/lu";
import img from "/logo.png";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { label: "Home", icon: <FiHome />, href: "/" },
    { label: "Attendance", icon: <FaListCheck />, href: "/attendence" },
    { label: "Leave", icon: <LuCalendarClock />, href: "/leave" },
    { label: "Company Details", icon: <LuBuilding />, href: "/compDetail" },
    { label: "Profile & Settings", icon: <LuUserCog />, href: "/profile" },
  ];

  const bottomItems = [
    { label: "Help", icon: <FiHelpCircle />, href: "/help" },
    { label: "Logout", icon: <FiLogOut />, href: "/logout" },
  ];

  return (
    <div className="h-auto md:w-56 sm:w-48 bg-white flex flex-col justify-between">
      {/* Logo Section */}
      <div className="px-6 py-6 flex items-center">
        <div>
          <img src={img} alt="Logo" />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 mb-[425px] ">
        <ul className="px-6 py-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={`flex items-center space-x-3 px-3 py-4 mb-1 rounded-md ${
                  location.pathname === item.href
                    ? "bg-[#0F172A] text-white"
                    : "text-[#0F172A] hover:bg-[#0F172A] hover:text-white"
                }`}
              >
                {item.icon}
                <span
                  className={`font-normal text-[14px] ${
                    location.pathname === item.href ? "font-medium" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Items */}
      <div className="mb-20">
        <ul className="px-6 py-4">
          {bottomItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={`flex items-center space-x-3 px-3 py-4 mb-1 rounded-md ${
                  location.pathname === item.href
                    ? "bg-[#0F172A] text-white"
                    : "text-[#0F172A] hover:bg-[#0F172A] hover:text-white"
                }`}
              >
                {item.icon}
                <span
                  className={`font-normal text-[14px] ${
                    location.pathname === item.href ? "font-medium" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
