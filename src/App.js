import Navigation from './components/navigation/navigation.js';
import VideoSection from './components/videoSection/videoSection.js';
import Upload from './components/upload/upload.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';







function App() {
  return (
    <>
    <BrowserRouter>
    
    <Navigation />
    <VideoSection />
      <Routes>
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
