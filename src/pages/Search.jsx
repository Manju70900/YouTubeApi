import React, {useState, useContext } from "react";
import {videoContext} from "./../apis/VideoContext";
import {FaSearch,FaMicrophone} from "react-icons/fa"
const Search = () => {
  console.log(useContext(videoContext));
  let { searchTerm } = useContext(videoContext);
  let [state, setState] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
    try {
      setState(searchTerm(state));
    } catch (error) {
      console.log(error);
    }
    setState("");
  };
  return (
    <div className="basis-[80%] ">
      <form className="flex items-center h-[70px] m-auto" onSubmit={handleSubmit}>
        <span className="w-[72%]">
          <input
            type="text"
            placeholder="Search"
            value={state}
            onChange={e => setState(e.target.value)}
            className="border-2 shadow-sm p-2 w-[100%]"
          />
        </span>
        <span className="w-[8%] text-center bg-gray-100 border-2">
          <button className="bg-gray-100 w-[50px] p-3">
            <FaSearch />
          </button>
        </span>
        <span className="w-[10%] flex justify-center text-lg">
          <FaMicrophone className="text-center" />
        </span>
      </form>
    </div>
  );
};

export default Search;
