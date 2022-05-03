import React, { useContext } from "react";
import { videoContext } from "../../apis/VideoContext";
import Spinner from "../spinner/Spinner";





const Player = () => {
  let { onSelect} = useContext(videoContext)

  if (!onSelect) {
  return <Spinner/>
  } else {
    return (
        <div className="p-2">
      <iframe
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${onSelect.id.videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    )
    
}


  
};

export default Player;
