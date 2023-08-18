import '../videoItemList/videoItemList.scss';

const VideoItemList = ({ video, handleChange }) => {
    return (
      <li onClick={() => handleChange(video.id)} className="video__item--list">
        <img className="video__thumbnail--img" src={video.image} alt="Thumbnail"></img>
        <div className='video__thumbnail'>
          <div className='video__thumbnail--title'>{video.title}</div>
          <div className='video__thumbnail--channel'>{video.channel}</div>
        </div>
      </li>
    );
  };
  
  export default VideoItemList;