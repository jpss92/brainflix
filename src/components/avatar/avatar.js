import "./avatar.scss";

function Avatar({ src }) {
    return(
        
        <img src={src}  alt="User" className="avatar"></img>
        
    );
}

export default Avatar;