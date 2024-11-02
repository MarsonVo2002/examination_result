import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const [setting, setSetting] = useState(false);
  const [search, setSearch] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [report, setReport] = useState(false);
  const navigate = useNavigate();
  const handleClick = (page) =>{
    setSetting(false);
    setSearch(false);
    setDashboard(false);
    setReport(false);
    if (page === "settings") {
      setSetting(true);
      navigate("/setting");
    } else if (page === "search") {
      setSearch(true);
      navigate("/search");
    } else if (page === "dashboard") {
      setDashboard(true);
      navigate("/");
    } else if (page === "report") {
      setReport(true);
      navigate("/report");
    }
  }
  return (
    <div
      className="rounded-r-lg bg-gradient-to-b from-yellow-400 via-yellow-300 
    via-yellow-200 via-green-400 via-green-300 via-blue-500 to-green-500
    flex flex-col items-start w-[18%] min-w-[120px]"
    >
      <div className="flex flex-row w-full justify-center p-8">
        <p className="font-bold lg:text-xl sm:text-sm text-sm">Menu</p>
      </div>
      <div className="ml-4 flex flex-col items-start space-y-8 sm:text-xs xl:text-[18px] text-xs">
        <button
          className={`${dashboard ? "font-bold" : "font-medium"}`}
          onClick={()=>handleClick("dashboard")}
        >
          Dashboard
        </button>
        <button
          className={`${search ? "font-bold" : "font-medium"}`}
          onClick={()=>handleClick("search")}
        >
          Search scores
        </button>
        <button
          className={`${report ? "font-bold" : "font-medium"}`}
          onClick={()=>handleClick("report")}
        >
          Reports
        </button>
        <button
          className={`${setting ? "font-bold" : "font-medium"}`}
          onClick={()=>handleClick("settings")}
        >
          Settings
        </button>
      </div>
    </div>
  );
};

export default Menu;
