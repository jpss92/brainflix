
import CommentForm from '../commentForm/commentForm';
import '../comments/comments.scss';
import CurrentVideo from '../currentVideo/currentVideo.js';


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
                  <div className='comment__timestamp'>{comment.timestamp}</div>
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