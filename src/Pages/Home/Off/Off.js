import React from 'react';
import off from '../../../images/pi.png';

const Off = () => {
    return (
        <div className='bg-black flex content-center mb-5'>
            <div className='w-full font-mono'>
                <h2 className='text-white text-6xl font-extrabold text-center mt-32 px-10'>Make Your First Order And Get <br/><span className='text-yellow-700'>50% Off</span></h2>
                <h3 className='text-white text-xl mt-8'>Get It Delivered Right To Your Door.</h3>
                <p className='text-white text-center px-24 mt-8 mb-24'>If you order food delivery from us for the first time then we have a gift - 50% discount for you on the first order. You just need to register and order your favorite food.</p>
            </div>
            <div className='w-full h-1/4'>
            <img className='w-5/6 h-full mt-16' src={off} alt="off"></img>
            </div>
            

        </div>
    );
};

export default Off;