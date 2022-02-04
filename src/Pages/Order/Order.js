import React from 'react';
import image from '../../images/all.jpg';

const Order = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='m-10 shadow-xl'>
                <img  className="rounded mx-48 mt-5" src={image} alt=""/>
                <h3 className='m-7 font-bold text-xl'>T-Bone Steaks</h3>
                <h4 className='font-bold text-xl m-5'>$25.39</h4>
                <h4 className='text-lg text-gray-500 mb-5'>Few things are better than a properly grillied steak.</h4>
            </div>
            
        </div>
    );
};

export default Order;