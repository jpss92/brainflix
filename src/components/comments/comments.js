
import CommentForm from '../commentForm/commentForm';
import '../comments/comments.scss';

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
  };

function Comments({ currentVideo }) {
  
  return(
    <div className='comment__section'>
    <CommentForm />
      <div>
        {currentVideo.comments && (
          <div>
            {currentVideo.comments.map((comment) => (
              <div className="comment__info" key={comment.id}>
                <div className='comment'>
                  <div className='comment__name'>{comment.name}</div>
                  <div className='comment__timestamp'>{formatDate(comment.timestamp)}</div>
                </div>
                <div>{comment.comment}</div>
                
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    )
 };



 export default Comments;