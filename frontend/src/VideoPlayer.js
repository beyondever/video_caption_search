import React from "react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <video controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
