import Sidebar from "./components/component/Sidebar";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AttendencePage from "./pages/AttendencePage";
import LeavePage from "./pages/LeavePage";
import ProfSettingPage from "./pages/ProfSettingPage";
import CompDetailsPage from "./pages/CompDetailsPage";
import HelpPage from "./pages/HelpPage";

const App = () => {
  return (
    <Router>
      <div className="flex w-full overflow-hidden">
        <div className="hidden lg:block w-[240px]">
          <Sidebar />
        </div>
        <div className="flex-1 ">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/attendence" element={<AttendencePage />}></Route>
            <Route path="/leave" element={<LeavePage />}></Route>
            <Route path="/compDetail" element={<CompDetailsPage />}></Route>
            <Route path="/profile" element={<ProfSettingPage />}></Route>
            <Route path="/help" element={<HelpPage />}></Route>
            <Route path="/logout" element={<HomePage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
