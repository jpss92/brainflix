import "./avatar.scss";
// import PropTypes from 'prop-types';
// import ProfileImage from '../../3.0-Assets/Images/Mohan-muruge.jpg';

// const Avatar = () => {
//     return 
//         <img
//             src={ProfileImage}
//             alt="Profile Image"
//         />
// };


// const Avatar = ({ src, alt }) => {
//     return (
//         <img 
//             src={src}
//             alt={alt}
//         />
//     );
// };

// Avatar.propTypes = {
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,

// };

function Avatar() {
    return(
        
        <img id="nav__avatar" className="avatar"></img>
        
    );
}

export default Avatar;