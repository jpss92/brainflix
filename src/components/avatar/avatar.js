import "./avatar.scss";

function Avatar({ src, id }) {
    return(
        
        <img src={src}  id={id} alt="User" className="avatar"></img>
        
    );
}

export default Avatar;