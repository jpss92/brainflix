import Button from '../button/button.js';
import Search from '../bar/bar.js';
import Avatar from '../avatar/avatar.js';
import Logo from '../../assets/Logo/BrainFlix-logo.svg';
import '../navigation/navigation.scss';
import profileImg from '../../assets/Images/Mohan-muruge.jpg';
import uploadImg from '../../assets/Icons/upload.svg';
import searchImg from '../../assets/Icons/search.svg';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <div className="nav">
            <Link to='/'>
            <img className="nav__logo" src={Logo} alt="Logo" />
            </Link>
            <div className="nav__search--bar">
            <Search id='upload__bar' src={searchImg}/>
            <Avatar id="nav__avatar" className="nav__avatar"src={profileImg} />
        </div>
        <Link to='upload' className='nav__btn--link'>
            <Button id="nav__btn" src={uploadImg}>Upload</Button>
        </Link>
        </div>
    );
};

export default Navigation;