import Navigation from './components/navigation/navigation.js';
import VideoSection from './components/videoSection/videoSection.js';
import Upload from './components/upload/upload.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path='/' element={<VideoSection />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/videos/:videoId' element={<VideoSection />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
