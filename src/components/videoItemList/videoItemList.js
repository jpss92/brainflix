import '../videoItemList/videoItemList.scss';
import { Link } from 'react-router-dom';
 
const VideoItemList = ({ video }) => {
  
    return (
      <Link to={`/videos/${video.id}`}>
      <li className="video__item--list">
        <img className="video__thumbnail--img" src={video.image} alt="Thumbnail"></img>
        <div className='video__thumbnail'>
          <div className='video__thumbnail--title'>{video.title}</div>
          <div className='video__thumbnail--channel'>{video.channel}</div>
        </div>
      </li>
       </Link>
      
    );
  };
  
  export default VideoItemList;