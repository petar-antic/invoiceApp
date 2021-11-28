import React from 'react';
import '../Styles/Navbar/Navbar.css';
import logo from '../Assets/logo.svg';
import moon from '../Assets/icon-moon.svg';
// import sun from '../Assets/icon-sun.svg';
import avatar from '../Assets/image-avatar.jpg';
import { useThemeUpdate } from '../Contexts/ThemeContext';

function Navbar() {
    const toggleTheme = useThemeUpdate();
    return (
        <nav>
            <div className="logoBox">
                <div className="square1"></div>
                {/* <div className="square2"></div> */}
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="rightSide">
                <div className="modeIcon" onClick={toggleTheme}>
                    <img src={moon} alt="moon" />
                    {/* <img src={sun} alt="sun" /> */}
                </div>
                <div className="line"></div>
                <div className="profilePicture">
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
