import Navigation from './components/navigation/navigation.js';
import VideoSection from './components/videoSection/videoSection.js';
// import Upload from './components/upload/upload.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import VideoList from './components/videoList/videoList.js';

import { useState } from 'react';
import VideoData from './assets/Data/video-details.json';
import CurrentVideo from './components/currentVideo/currentVideo.js';







function App() {
  const [videoList, setVideoList] = useState(VideoData);
  return (
    <>
    <BrowserRouter>
    
    <Navigation />
    <VideoSection />
      <Routes>
        
        <Route path='/' element={<VideoSection />} />
         {/* <Route path='upload' element={<Upload />} /> */}
         <Route path='/videos/:videoId' element={<VideoSection />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
