import React, { useState } from 'react';
import VideoList from '../../videoList/videoList.js';
import CurrentVideo from '../../currentVideo/currentVideo.js';
import VideoData from '../../../assets/Data/video-details.json';

function VideoSection() {
  const [currentVideo, setCurrentVideo] = useState(VideoData[0]);
  const [videoList, setVideoList] = useState(VideoData);

  const handleChange = (id) => {
    setCurrentVideo(VideoData.find((video) => video.id === id));
  };

  return (
    <>
      <CurrentVideo currentVideo={currentVideo} />
      <VideoList
        handleChange={handleChange}
        videoList={videoList.filter((video) => video.id !== currentVideo.id)}
      />
    </>
  );
}

export default VideoSection;