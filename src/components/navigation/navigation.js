import Button from '../button/button.js';
import Search from '../bar/bar.js';
import Avatar from '../avatar/avatar.js';
import Logo from '../../assets/Logo/BrainFlix-logo.svg';
import '../navigation/navigation.scss';
import profileImg from '../../assets/Images/Mohan-muruge.jpg';
import uploadImg from '../../assets/Icons/upload.svg';
import searchImg from '../../assets/Icons/search.svg';

function Navigation() {
    return (
        <div className="nav">
            <img className="nav__logo" src={Logo} alt="Logo" />
        <div className="nav__search--bar">
        <Search src={searchImg}/>
        <Avatar className="nav__avatar"src={profileImg} />
        </div>
        <Button src={uploadImg}>Upload</Button>
        </div>
    );
};
export default Navigation;

console.log(Navigation);