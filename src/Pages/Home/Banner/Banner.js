import React from 'react';
import banner from '../../../images/burger.png';

const Banner = () => {
    return (
        <div className='bg-black flex content-center'>
            <div className='w-full h-1/4'>
            <img className='w-5/6 h-1/6' src={banner} alt="banner"></img>
            </div>
            <div className='w-full font-mono'>
                <h2 className='text-white text-7xl font-extrabold text-center mt-36 px-10'>We deliver the taste of life</h2>
                <h3 className='text-white text-xl mt-8'>Get It Delivered Right To Your Door.</h3>
            </div>

        </div>
    );
};

export default Banner;