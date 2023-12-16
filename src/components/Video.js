import React from 'react';

/*** CSS Imports ***/
import './Video.css';

/*** Icon Imports ***/
import { GoDotFill } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";

function Video() {
    return (
        <div className='video'>
            <div className='video_cover'>
                <img src="https://images.gamewatcherstatic.com/image/file/0/98/87240/avengers_wallpaper_1920x1080_by_sachso74-d8giflj_copy.jpg"
                    alt='' />
                <span className='video_duration'>
                    02:45
                </span>
            </div>
            <div className='video_info d-flex'>
                <div>
                    <div className='video_title'>
                        Marvel Universe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className='video_details'>
                        <span>
                            12M Views
                        </span>
                        <GoDotFill />
                        <span>
                            6 Days ago
                        </span>
                    </div>
                    <div className='video_channel'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/8/8a/Bouclier_Captain_America_1018.png'
                            alt='' />
                        <span>Channel Stephen</span>
                        <span className='purple_mark'><IoMdCheckmark /></span>
                    </div>
                </div>
                <div className='px-2 py-2'>
                    <span className='video_options'>
                        <SlOptionsVertical size={16} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Video;