import React, { useState } from 'react';
import VideoList from '../videoList/videoList.js';
import CurrentVideo from '../currentVideo/currentVideo.js';
import VideoData from '../../assets/Data/video-details.json';
import '../videoSection/videoSection.scss';
import Comments from '../comments/comments.js';

function VideoSection() {
  const [currentVideo, setCurrentVideo] = useState(VideoData[0]);
  const [videoList, setVideoList] = useState(VideoData);

  const handleChange = (id) => {
    setCurrentVideo(VideoData.find((video) => video.id === id));
  };

  return (
    <div>
      <CurrentVideo currentVideo={currentVideo} />
      <div className="video__section">
          <Comments  currentVideo={currentVideo}/>
          <p className='next__video'>Next Video</p>
        <div className='comment'>
          <VideoList
          handleChange={handleChange}
          videoList={videoList.filter((video) => video.id !== currentVideo.id)}/>
          </div>
      </div>
    </div>
  );
}

export default VideoSection;