import React, { useState } from "react";
import axios from "axios";

const UploadVideo = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("video_file", file);

    axios
      .post("/api/videos/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Upload successful", response);
      })
      .catch((error) => {
        console.error("Upload error", error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
};

export default UploadVideo;
