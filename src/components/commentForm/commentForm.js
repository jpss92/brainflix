import Avatar from '../avatar/avatar.js';
import '../commentForm/commentForm.scss';
import Button from '../button/button.js';
import addComment from '../../assets/Icons/add_comment.svg';

function CommentForm() {
    return (
        <div className="comment__form">
            <Avatar id='comment__avatar'/>
        <form className="comment__form--data" >
            <label>JOIN THE CONVERSATION</label>
            <textarea className="comment__form--input" placeholder="Add a new comment"></textarea>
        </form>
       <Button id="comment__btn" src={addComment}>Comment</Button>
        
        </div>
    )
}

export default CommentForm;