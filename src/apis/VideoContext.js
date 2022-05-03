import React, { createContext, useState, useEffect } from "react";
import Axios from "./Axios";
import { baseParam } from "./Axios";

export let videoContext = createContext();
const VideoContext = ({ children }) => {
  let [videos, setVideos] = useState(null);
  let [loading, setLoading] = useState(false);
  let [onSelect, setOnSelect] = useState(null);
  useEffect(() => {
    searchTerm("javascript");
  }, []);

  let searchTerm = async term => {
    setLoading(true);
    let { data } = await Axios.get("/search", {
      params: {
        q: term,
        ...baseParam,
      },
    });
    setVideos(data);
    setOnSelect(data.items[0]);
    setLoading(false);
  };
  let handleClick = video => {
    setOnSelect(video);
  };

  return (
    <videoContext.Provider
      value={{ searchTerm, videos, loading, onSelect, handleClick }}
    >
      {children}
    </videoContext.Provider>
  );
};

export default VideoContext;
