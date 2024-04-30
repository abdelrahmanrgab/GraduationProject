import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateScreen } from "../../../features/screen/screenSlice";
import axios from "axios";
const TopSide = ({ schema }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const screen = useSelector((state) => state.screen);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateViewportWidth);
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  const updateToPC = () => {
    dispatch(updateScreen("pc"));
  };
  const updateToTablet = () => {
    dispatch(updateScreen("tablet"));
  };

  const updateToIphone = () => {
    dispatch(updateScreen("phone"));
  };

  const handleSubmit = async () => {
    console.log(schema);
    // const res = await axios.post(
    //   "end point",
    //   { schema },
      // {
      //   headers: {
      //     Authorization: "Bearer " + token,
      //   },
      // }
    // );
    // console.log(res);
    // lading
    // navigate to your website
  };

  const devices = [
    {
      icon: <img src="/assets/icons/pc.svg" height={22} alt="down" style={{ cursor: "pointer" }} onClick={updateToPC} />,
      endPoint: "5000",
      startPoint: "1024",
      type: "pc",
    },
    {
      icon: <img src="/assets/icons/tablet.svg" height={27} alt="down" style={{ cursor: "pointer" }} onClick={updateToTablet} />,
      endPoint: "1023",
      startPoint: "768",
      type: "tablet",
    },
    {
      icon: <img src="/assets/icons/phone.svg" height={27} alt="down" style={{ cursor: "pointer" }} onClick={updateToIphone} />,
      endPoint: "767",
      startPoint: "0",
      type: "phone",
    },
  ];

  return (
    <div className="flex-center gap-5 bg-1A2345 text-white  h-14 relative">
      {devices.map((device) => {
        const showControllers = viewportWidth >= 1024;
        const isActive = screen === device.type;
        return showControllers ? (
          <div key={device.endPoint} className={isActive ? "bg-blue-500 p-1 rounded-sm w-10 h-10 flex-center" : "w-10 h-10 flex-center"}>
            {device.icon}
          </div>
        ) : (
          ""
        );
      })}
      <div className="absolute right-6">
        <button className="bg-blue-500 px-4 rounded-lg h-10 flex-center" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TopSide;
