import React from 'react';
import discount from '../../../images/discount.svg';
import express from '../../../images/Express.svg';
import restuarants from '../../../images/restuarants.svg';

const Choose = () => {
    return (
        <div className='mb-24'>
            <h3 className='text-2xl text-yellow-500 mt-24 text-bold font-mono'>The reason why</h3>
            <h2 className='text-5xl font-bold mt-8  '>Why People Choose Us</h2>
            <h3 className='text-gray-400 m-8'>We have many advantages but we will highlight <br/> only some of them, look below.</h3>
            <div className='grid grid-cols-3 gap-16  mt-16 px-40'>
                <div>
                    <img className='mx-36' src={discount} alt=""/>
                    <h3 className='text-xl font-bold mt-8'>Discount System</h3>
                    <h4 className='text-gray-400 mt-4'>We have a favorable discount system for our regular customers.</h4>
                </div>
                <div>
                    <img className='mx-36' src={express} alt=""/>
                    <h3 className='text-xl font-bold mt-8'>Express Delivery</h3>
                    <h4 className='text-gray-400 mt-4'>The hottest food & fastest delivery to any location of your city.</h4>
                </div>
                <div>
                    <img className='mx-36' src={restuarants} alt=""/>
                    <h3 className='text-xl font-bold mt-8'>50+ Restaurants</h3>
                    <h4 className='text-gray-400 mt-4'>Large selection of restaurants and cafes throughout the country.</h4>
                </div>

            </div>

        </div>
    );
};

export default Choose;