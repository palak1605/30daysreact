import React, { useEffect, useState } from "react";
import "../CSS/trafficcode.css";
const colorList = ["red", "yellow", "green"];
function Trafficcode() {
  const [color, setColor] = useState(0);
  const [isAutomatic, setIsAutomatic] = useState(true);
  useEffect(() => {
    let timeoutId;
    if (isAutomatic) {
      const cycleColors = () => {
        let nextColor = (color + 1) % 3;
        setColor(nextColor);

        let delay = 5000;
        if (nextColor === 0) delay = 4000;
        else if (nextColor === 1) delay = 7000;

        console.log("Delay:", delay);

        timeoutId = setTimeout(cycleColors, delay);
      };

      timeoutId = setTimeout(cycleColors, 5000);
    } else {
      clearTimeout(timeoutId);
    }
    return () => clearTimeout(timeoutId);
  }, [color, isAutomatic]);
  //     useEffect(()=>{
  //      let intervalId=setInterval(()=>{
  //             setColor((prev) => {
  //                 const newColor = (prev + 1) % 3;
  //                 return newColor;
  //               });
  //         },5000)

  //     return () => clearInterval(intervalId);
  // }, []);
  const handleColorChange = (i) => {
    setIsAutomatic(false);
    setColor(i);
  };
  return (
    <>
      <div className="buttonStyle">
        <button
          onClick={() => handleColorChange(0)}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Red
        </button>
        <button
          onClick={() => handleColorChange(1)}
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => handleColorChange(2)}
          style={{ backgroundColor: "green", color: "white" }}
        >
          Green
        </button>
      </div>
      <button onClick={() => setIsAutomatic(true)}>Automatic On</button>
      <div
        className="circle"
        style={{ backgroundColor: colorList[color] }}
      ></div>
    </>
  );
}
export default Trafficcode;
