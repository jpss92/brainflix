import '../currentVideo/currentVideo.scss';


const CurrentVideo = ({ currentVideo }) => {

  return (
    
    <div className="video__current">
      <div className='video__player--background'>
        <video className="video__player" width="100%" controls poster={currentVideo.image} >{currentVideo.video}</video>
      </div>
    </div>
    
  );
};

export default CurrentVideo;