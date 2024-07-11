import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ColorPicker from "./ColorPicker";
import { initialState } from "../../../features/templateData/templateSlice";

const ColorController = ({ targetTemplate, updateAll }) => {
  const [open, setOpen] = useState(false);
  console.log(initialState);
  const [firstColor, setFirstColor] = useState([]);
  useEffect(() => {
    setFirstColor(colors.templateColors.slice());
  }, []);

  const colors = targetTemplate.colors;
  const templateColors = Object.keys(colors)[0];
  const dispatch = useDispatch();
  const handleChange = (e, index) => {
    dispatch(updateAll.updateTemplate({ section: "colors", variable: null, value: e.target.value, i: index, blockName: templateColors }));
  };
  const palettes = [
    colors.templateColors,
    ["#FFFAF3", "#F1C40F", "#E67E22", "#E74C3C", "#8E44AD", "#3498DB"],
    ["#F5F3BB", "#C7F0BD", "#7DBBC3", "#607196", "#5C3C92", "#4A256D"],
    ["#F8F4E3", "#F1DCA7", "#F9A870", "#E68364", "#966C6C", "#684A4A"],
    ["#F4EDE8", "#D9B5B5", "#A28A8A", "#6C6461", "#5A5351", "#3F3735"],
    ["#9C27B0", "#BA68C8", "#CE93D8", "#F48FB1", "#FFCDD2", "#D81B60"],
    ["#FFFBF5", "#E1ECE5", "#C1DED1", "#AAC8C6", "#80746D", "#5A514D"],
    ["#FFFDFD", "#F4C2C2", "#E9A9A9", "#B6B6A6", "#7B7B7B", "#535353"],
    ["#F0F8FF", "#ACE5EE", "#8DD3C7", "#60B6B8", "#3B7A82", "#265466"],
    ["#FFFAF0", "#F3EACB", "#E2CFC4", "#C7B198", "#A67C67", "#70564A"],
    ["#FFF5EE", "#FFD1B3", "#FFA07A", "#CD5C5C", "#8B4513", "#602E1A"],
    ["#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#BA55D3", "#8A2BE2"],
    ["#FFDAB9", "#FFE4B5", "#FFA07A", "#FA8072", "#E9967A", "#FF6347"],
    ["#FFFACD", "#FAFAD2", "#FFEFD5", "#FFDAB9", "#FFE4B5", "#FFD700"],
    firstColor,
  ];
  const [selectedColor, setSelectedColor] = useState(0);
  const handleColorChange = (paletteIndex) => {
    setSelectedColor(paletteIndex);
    console.log(updateAll);
    dispatch(updateAll.changePalletes(palettes[paletteIndex]));
  };
  return (
    <div className="controller">
      <div className="flex-between cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="controller-name">colors</h3>
        {open ? <img src="/assets/icons/down.svg" width={18} alt="down" /> : <img src="/assets/icons/up.svg" width={18} alt="down" />}
      </div>
      {open && (
        <div className="px-2">
          {colors[templateColors].map((color, index) => {
            console.log(color);
            return (
              <div key={index} className="flex flex-row justify-between md:flex-col  2xl:flex-row mb-1 md:mb-3 2xl:items-start " style={{ marginTop: "0" }}>
                <p className=" text-black font-semibold">Color-{index + 1}</p>
                <ColorPicker color={color} handleChange={(e) => handleChange(e, index)} />
              </div>
            );
          })}
          <div className="flex-between mt-3 pb-1 border-t border-blue-200">
            <div className="flex-col" style={{ marginTop: "0" }}>
              <p
                className="text-bolder cursor-pointer my-1"
                style={{ color: "#1a2345", fontSize: "18px" }}
                onClick={() => document.getElementById("colorInput").click()}
              >
                Palettes
              </p>
              <div className="w-full flex gap-1 flex-wrap justify-center">
                {palettes.map((palette, paletteIndex) => (
                  <div
                    key={paletteIndex}
                    className={`flex flex-col`}
                    style={{ position: "relative", border: selectedColor === paletteIndex ? "solid 3px #ce79cc" : "solid 2px transparent" }}
                  >
                    {palette.map((color, colorIndex) => (
                      <div
                        key={color}
                        style={{
                          width: "70px",
                          height: "15px",
                          backgroundColor: color,
                          cursor: "pointer",
                        }}
                        onClick={() => handleColorChange(paletteIndex)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorController;
