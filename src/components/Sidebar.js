import React, { useContext } from 'react';

/*** CSS Imports ***/
import './Sidebar.css';

/*** Icon Imports ***/
import { MdSubscriptions, MdExitToApp, MdThumbUp, MdHome } from 'react-icons/md';
import { MdHistory, MdLibraryBooks, MdSentimentDissatisfied } from 'react-icons/md';

/*** Context Imports ***/
import SidebarContext from 'contexts/SidebarContext';

function Sidebar() {

    /* useContext */
    const { isSidebarOpen } = useContext(SidebarContext);

    return (
        <nav className={`${isSidebarOpen ? 'sidebar open' : 'sidebar'} border border-info`}>
            <ul className='list-unstyled'>
                <li>
                    <span className='sidebar_icon'><MdHome size={22} /></span>
                    <span className='sidebar_text'>Home</span>
                </li>
                <li>
                    <span className='sidebar_icon'><MdSubscriptions size={22} /></span>
                    <span className='sidebar_text'>Subscriptions</span>
                </li>
                <li>
                    <span className='sidebar_icon'><MdThumbUp size={22} /></span>
                    <span className='sidebar_text'>Liked</span>
                </li>
                <li>
                    <span className='sidebar_icon'><MdHistory size={22} /></span>
                    <span className='sidebar_text'>History</span>
                </li>
                <li>
                    <span className='sidebar_icon'><MdExitToApp size={22} /></span>
                    <span className='sidebar_text'>Logout</span>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;