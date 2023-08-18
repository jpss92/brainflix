import '../currentVideo/currentVideo.scss';
import views from '../../assets/Icons/views.svg';
import likes from '../../assets/Icons/likes.svg';

const CurrentVideo = ({ currentVideo }) => {
  return (
    <div className="video__current">
      <div className='video__player--background'>
        <video className="video__player" width="100%" controls poster={currentVideo.image} >{currentVideo.video}</video>
      </div>
      <h1 className="video__title">{currentVideo.title}</h1>
      <div className="video__details">
        <div className="video">
          <div className='video__channel'>{currentVideo.channel}</div>
          <div className='video__info--timestamp'>{currentVideo.timestamp}</div>
          
          </div>
        <div className="video">
        <div className='video__info' id="views">
              <img src={views} alt="views"></img>
              <div className='video__info--views'>{currentVideo.views}</div>
        </div>
          <div className='video__info'>
              <img src={likes} alt="Likes"></img>
              <div className='video__info--likes'>{currentVideo.likes}</div>
          </div>
        </div>
      </div>
      <div className="video__description">{currentVideo.description}</div>
    </div>
  );
};

export default CurrentVideo;