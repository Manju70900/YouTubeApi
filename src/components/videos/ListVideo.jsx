import React, { useContext } from "react";

import ListItem from "./ListItem";
import Spinner from "../spinner/Spinner";
import { videoContext } from "../../apis/VideoContext";
const ListVideo = () => {
  let { videos } = useContext(videoContext);

  return (
    <div>
      {videos === null ? (
        <Spinner />
      ) : (
        videos.items.map(item => {
          return <ListItem {...item} key={item.id.videoId} id={item} />;
        })
      )}
    </div>
  );
};

export default ListVideo;
