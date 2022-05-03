import React, { useState } from "react";
import ReactDOM from "react-dom";

const Child = () => {
    let [open, setopen]=useState(false)

    let handleclick = () => {
        
    }


  return ReactDOM.createPortal(
    <div className="m-1  h-[90vh] w-[100vw] mt-0 mr-auto ml-auto shadow-md absolute inset-0 flex items-center justify-center flex-col" >
      <form className="m-1 bg-white mb-[150px] w-[25vw] mt-0 mr-auto ml-auto shadow-md " >
        <h2 className="mt-5 text-center text-red-600 font-extrabold text-2xl ">
          Login
        </h2>   
        <div>
          <input
            type="email"
            placeholder="enter Email id"
            className="border-2 border-solid border-slate-500 w-[90%] m-5 p-[10px] rounded-md text-center"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="enter Passward"
            className="border-2 border-solid border-slate-500 w-[90%] m-5 p-[10px] rounded-md text-center"
          />
        </div>
        <div>
          <button className="-slate-500 w-[90%] m-5 p-[10px] bg-red-600 text-white font-bold rounded-md">
            LOGIN
          </button>
        </div>
      </form>
    </div>,
    // document.getElementById("childRoot")
  );
};

export default Child;
