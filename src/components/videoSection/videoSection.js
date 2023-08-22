import React, { useState } from 'react';
import VideoList from '../videoList/videoList.js';
import CurrentVideo from '../currentVideo/currentVideo.js';
import VideoData from '../../assets/Data/video-details.json';
import '../videoSection/videoSection.scss';
import Comments from '../comments/comments.js';
import Description from '../description/description';

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
        <div>
          <Description currentVideo={currentVideo} />
          <Comments  currentVideo={currentVideo} s/>
        </div>
        <div id='next__video' className='comment'>
          <p className='next__video'>Next Video</p>
          <VideoList
          handleChange={handleChange}
          videoList={videoList.filter((video) => video.id !== currentVideo.id)}/>
          </div>
      </div>
    </div>
  );
}

export default VideoSection;