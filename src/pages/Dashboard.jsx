import React, { useEffect, useState } from "react";
import TopSide from "./../components/dashboard/sections/TopSide";
import LeftSide from "../components/dashboard/sections/LeftSide";
import RightSide from "../components/dashboard/sections/RightSide";
import { useSelector } from "react-redux";
import { templateActions1 } from "../features/templateData/templateSlice";

const Dashboard = () => {
  const state = useSelector((state) => state.template1);
  const screen = useSelector((state) => state.screen);
  const [screenWidth, setScreenWidth] = useState(5000);

  useEffect(() => {
    let sWidth;
    if (screen === "phone") {
      sWidth = "767px";
    } else if (screen === "tablet") {
      sWidth = "1023px";
    } else {
      sWidth = "5000px"; // Default width if screen is neither "phone" nor "tablet"
    }
    setScreenWidth(sWidth);
  }, [screen]);

  return (
    <section className="dashboard-container mx-auto relative">
      <TopSide schema={state} />
      <div className="w-full flex-between flex-col md:flex-row dashboard-subContainer overflow-hidden">
        <LeftSide targetTemplate={state} updateAllRef={templateActions1} />
        <div
          className="max-md:w-full md:w-70 flex-auto  flex justify-start flex-col items-center text-black "
          style={{ height: "calc(100vh - 56px)", maxWidth: screenWidth }}
        >
          <div className="w-full border border-slate-300 shadow  md:rounded-tl-3xl md:rounded-bl-3xl  mb-2 overflow-y-auto overflow-x-hidden  mx-2 md:mx-4 md:self-start md:ml-1 relative">
            <RightSide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
