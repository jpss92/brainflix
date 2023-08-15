import Button from '../button/button.js';
import Search from '../bar/bar.js';
import Avatar from '../avatar/avatar.js';
import Logo from '../../assets/Logo/BrainFlix-logo.svg';
import '../navigation/navigation.scss';





function Navigation() {
    return (
        <div className="nav">
            <img className="nav__logo" src={Logo} alt="Logo" />
        <div className="nav__search--bar">
        <Search/>
        <Avatar />
        </div>
        <Button />
        </div>
    );
};
export default Navigation;

console.log(Navigation);