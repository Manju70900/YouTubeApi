import React, { useRef, useState } from "react";
import {FaUser}  from  'react-icons/fa'
// import Child from "../components/childcompo/Child";


const Menu = () => {
   let [state, setstate] = useState(false);
  // let demoref=useRef()
  
   let handleclick = e => {
     e.preventDefault();

       setstate(true)
    
   }




  return (
    <div className="basis-[35%] flex items-center justify-between">
      <span className="h-[40px] w-[20%]">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="style-scope yt-icon"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <g className="style-scope yt-icon">
            <path
              d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
              className="style-scope yt-icon"
            />
          </g>
        </svg>
      </span>
      <span className="h-[40px] w-[20%]">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="style-scope yt-icon"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <g className="style-scope yt-icon">
            <path
              d="M16,4v4h4V4H16z M16,10v4h4v-4H16z M10,4v4h4V4H10z M10,10v4h4v-4H10z M16,16v4h4v-4H16z M10,16v4h4v-4H10z M4,4v4h4V4H4z M4,10v4h4v-4H4z M4,16v4h4v-4H4z"
              className="style-scope yt-icon"
            />
          </g>
        </svg>
      </span>
      <span className="h-[40px] w-[20%]">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="style-scope yt-icon"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <g className="style-scope yt-icon">
            <path
              d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
              className="style-scope yt-icon"
            />
          </g>
        </svg>
      </span>
      <span className="h-[40px] w-[40%] rounded-md border-2 border-blue-700 flex items-center justify-center">
        {/* <img
          src=" https://yt3.ggpht.com/yti/APfAmoGCmnH_3F0coXKkFTNXaF8EyAc8Z4tRvXXxHXw_mQ=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="profile"
          className="h-[50px] w-[30%] rounded-full"
        /> */}
        <button
          
          className="flex items-center justify-center font-bold"
            // onClick={handleclick}
        >
          <span>
            <FaUser />
          </span>
          Login
        </button>
        
      </span>

    
    </div>
  );
};

export default Menu;
