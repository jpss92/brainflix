import '../videoItemList/videoItemList.scss';

const VideoItemList = ({ video, handleChange }) => {
    return (
      <li onClick={() => handleChange(video.id)} className="video__item--list">
        <div>{video.title}</div>
        <div>{video.channel}</div>
        <div>{video.image}</div>
        <div>{video.description}</div>
        <div>{video.views}</div>
        <div>{video.likes}</div>
        <div>{video.duration}</div>
        <video>{video.video}</video>
        <div>{video.timestamp}</div>
        <div>
          {video.comments && (
            <div>
              {video.comments.map((comment) => (
                <div key={comment.id}>
                  <div>{comment.name}</div>
                  <div>{comment.comment}</div>
                  <div>{comment.likes}</div>
                  <div>{comment.timestamp}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </li>
    );
  };
  
  export default VideoItemList;