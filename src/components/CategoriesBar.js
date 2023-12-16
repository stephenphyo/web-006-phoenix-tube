import React, { useState } from 'react';

/*** CSS Imports ***/
import './CategoriesBar.css';


const categories = [
    'All', 'React.js', 'Next.js', 'Angular.js', 'HTML', 'CSS', 'Node.js', 'Java', 'Hello Kitty Hello Kitty Hello Kitty', 'Hello Kitty Hello Kitty Hello Kitty2', 'Hello Kitty Hello Kitty Hello Kitty3'
]

function CategoriesBar() {

    /* useState */
    const [active, setActive] = useState('All');

    return (
        <div className='categories_bar'>
            {
                categories.map((value, index) => (
                    <span key={index}
                        onClick={() => setActive(value)}
                        className={active === value && 'active'}>
                        {value}
                    </span>
                ))
            }
        </div>
    );
}

export default CategoriesBar;