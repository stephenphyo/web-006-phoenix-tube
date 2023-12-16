import React from 'react';

/*** Component Imports  ***/
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

function MainLayout(props) {
    return (
        <div className='app'>
            <div className='app_header'>
                <Header />
            </div>
            <div className='app_container'>
                <Sidebar />
                <div className='app_main'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;