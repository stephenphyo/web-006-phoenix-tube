import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

/** CSS Imports ***/
import './Header.css';

/*** Icon Imports ***/
import { FaBars } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { MdNotifications, MdApps } from 'react-icons/md';

/*** Context Imports ***/
import SidebarContext from 'contexts/SidebarContext';

function Header() {

    /* useContext */
    const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

    /* useNavigate */
    const navigate = useNavigate();

    return (
        <div className='header border border-danger'>
            <div className='header_left'>
                {/* Menu Bar */}
                <span className='header_icon'
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <FaBars size={20} />
                </span>

                {/* Logo */}
                <img src='https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg'
                    alt='logo' className='header_logo'
                    onClick={() => navigate('/')} />
            </div>

            {/* Search Bar */}
            <div className='header_center'>
                <form className='header_search'>
                    <input type='text' placeholder='Search' />
                    <button type='submit'>
                        <BsSearch size={22} />
                    </button>
                </form>
            </div>

            <div className='header_right'>
                <span className='header_icon notification'>
                    <MdNotifications size={26} />
                    <span>10</span>
                </span>
                <span className='header_icon'>
                    <MdApps size={26} />
                </span>
                <img className='header_right_avatar'
                    src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
                    alt='avatar'
                    onClick={() => navigate('/auth/login')} />
            </div>
        </div>
    );
}

export default Header;