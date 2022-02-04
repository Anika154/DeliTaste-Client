import React from 'react';
import logo from '../../../images/logo.png';


const Header = () => {
    
    return (
        <div className='bg-black h-4/5 flex content-center justify-around'>
           <img className='mr-80 py-7 justify-self-start' src={logo} alt='logo'></img>
           <div className='pt-10'>
               <a className='text-white mx-5 text-lg' href='#'>Home</a>
               <a className='text-white mx-5 text-lg' href='#'>My Booking</a>
               <a className='text-white mx-5 text-lg' href='#'>All Booking</a>
               <a className='text-white mx-5 text-lg' href='#'>Login</a>
               </div>  
        </div>
    );
};

export default Header;