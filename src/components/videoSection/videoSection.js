import React, { useEffect, useState } from 'react';
import VideoList from '../videoList/videoList.js';
import CurrentVideo from '../currentVideo/currentVideo.js';
import '../videoSection/videoSection.scss';
import Comments from '../comments/comments.js';
import Description from '../description/description';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import VideoItemList from '../videoItemList/videoItemList.js';

function VideoSection() {
  const api = 'https://project-2-api.herokuapp.com';
  const apiKey = '?api_key=3cac4cb8-8b10-4983-891a-2b230666a31c'
let {videoId} = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);
  
  useEffect(() => {

    axios
      .get(api + '/videos/' + apiKey)
      .then(res => {
        setVideoList(res.data);
        // setCurrentVideo(res.data[0]);
        
      }) 
  }, []); 

  const fetchVideoDetails = (id) => {
    console.log(id);
    axios
      .get(api + '/videos/' + id + apiKey)
      .then(res => {
        setCurrentVideo(res.data);
        const updatedVideoList = videoList.map(video =>
          video.id === id ? { ...video, ...res.data } : video); 

        
        
      }) 
  };

useEffect(() => {
  let id = videoId || videoList[0]?.id
  if(id){
fetchVideoDetails(id);}
  console.log('test')
},[videoList, videoId]);


  return (
    <div>
   {currentVideo &&  <CurrentVideo currentVideo={currentVideo} />}
      <div className="video__section">
        <div>
      {currentVideo &&<Description currentVideo={currentVideo} />}
        {currentVideo &&  <Comments  currentVideo={currentVideo} />}
        </div>
        <div id='next__video' className='comment'>
          <p className='next__video'>Next Video</p>
          {currentVideo && <VideoList
          videoList={videoList.filter((video) => video.id !== currentVideo.id)}/>}
          </div>
      </div>
    </div>
  )
}
; 
export default VideoSection;

