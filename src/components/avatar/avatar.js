import "./avatar.scss";

function Avatar({ src }) {
    return(
        
        <img src={src}  className="avatar"></img>
        
    );
}

export default Avatar;