import React from "react";
import UploadVideo from "./components/UploadVideo";
import SearchBar from "./components/SearchBar";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const videoId = 1; // Example video ID
  const videoUrl = `/media/videos/${videoId}.mp4`;

  return (
    <div>
      <h1>Video Upload and Search</h1>
      <UploadVideo />
      <SearchBar videoId={videoId} />
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
};

export default App;
