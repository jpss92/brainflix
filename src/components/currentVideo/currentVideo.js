import '../currentVideo/currentVideo.scss';
import views from '../../assets/Icons/views.svg';
import likes from '../../assets/Icons/likes.svg';

const CurrentVideo = ({ currentVideo }) => {
    return (
      <div>
        <h1>{currentVideo.title}</h1>
        <div className="video">
            <div className='video__channel'>{currentVideo.channel}</div>
            <div className='video__info'>
                <img src={views} alt="views"></img>
                <div>{currentVideo.views}</div>
            </div>
        </div>
        <div className="video">
            <div>{currentVideo.timestamp}</div>
            <div className='video__info'>
                <img src={likes}></img>
                <div>{currentVideo.likes}</div>
            </div>
        </div>
        
        <img src="{currentVideo.image}"></img>
        <div>{currentVideo.description}</div>
        
        
        <div>{currentVideo.duration}</div>
        <video controls>{currentVideo.video}</video>
        
        <div>
          {currentVideo.comments && (
            <div>
              {currentVideo.comments.map((comment) => (
                <div key={comment.id}>
                  <div className='comment'>
                    <div className='comment__name'>{comment.name}</div>
                    <div>{comment.timestamp}</div>
                  </div>
                  <div>{comment.comment}</div>
                  <div className='comment__likes'>
                    <img src={likes}></img>
                    <div>{comment.likes}</div>
                  </div>
                  
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default CurrentVideo;