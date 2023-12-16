import React from 'react';

/*** Component Imports  ***/
import Header from 'components/Header';

function MainLayout(props) {
    return (
        <div className='app'>
            <div className='app_header'>
                <Header />
            </div>
            {props.children}
        </div>
    );
}

export default MainLayout;