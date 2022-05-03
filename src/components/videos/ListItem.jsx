import React, { useContext } from "react";
import Moment from "react-moment";
import { videoContext } from "../../apis/VideoContext";

const ListItem = ({ snippet, id }) => {
    let {handleClick} = useContext(videoContext)
    let { publishedAt, channelId, title, description, thumbnails, channelTitle } = snippet;
    return (
      <div className="thumbnail flex my-1" onClick={()=>handleClick(id)}>
        <figure className="basis-[40%]">
          <img src={thumbnails.medium.url} alt={title} className="p-2 pr-2" />
        </figure>
        <main className="basis-[60%] mt-1">
          <h3 className="font-semibold">{title.slice(0, 25) + "..."}</h3>
          <h5>{channelTitle}</h5>
          <p>
            {/* <Moment fromNow>{publishedAt}</Moment> */}
          </p>
        </main>
      </div>
    );
};

export default ListItem;
