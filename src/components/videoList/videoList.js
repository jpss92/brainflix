import VideoItemList from '../videoItemList/videoItemList.js';

const VideoList = ({ videoList, handleChange }) => {
  return (
    <ul>
      {videoList.map((video) => (
        <VideoItemList
          handleChange={handleChange}
          key={video.id}
          video={video}
        />
      ))}
    </ul>
  );
};

export default VideoList;