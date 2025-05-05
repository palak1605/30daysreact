import React, { useEffect, useState } from "react";
import "../CSS/Caraousel.css";
const Images = [
  {
    url: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    alt: "Mountain View",
  },
  {
    url: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    alt: "City Night Lights",
  },
  {
    url: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
    alt: "Sunset Beach",
  },
  {
    url: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    alt: "City Night Lights",
  },
  {
    url: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
    alt: "Sunset Beach",
  },
];
function Caraousel(){
  const[track,setTrack]=useState(0);
  const[isHovered,setIsHovered]=useState(false);
  useEffect(()=>{
    if(isHovered){
      return;
    }
    let i=setInterval(()=>{
      setTrack(prev => (prev === Images.length - 1 ? 0 : prev + 1));
    },1000)
    return () => clearInterval(i);
  },[isHovered])
const handlePreviousclick=()=>{
  if(track==0){
    setTrack(Images.length-1)
  }
  else{
    setTrack(track-1);

  }
}
const handleNextclick=()=>{
  if(track==Images.length-1){
    setTrack(0)
  }
  else{
    setTrack(track+1);
  }

}
  return(
    <div>
        <button onClick={handlePreviousclick}>Previous</button>
{<img  className="imagecard" src={Images[track].url} alt={Images[track].alt}
onMouseEnter={()=>setIsHovered(true)}
onMouseLeave={()=>setIsHovered(false)}
/>}
<button onClick={handleNextclick}>Next</button>
    </div>
  )
}
export default Caraousel;
