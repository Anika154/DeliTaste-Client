import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import logo from '../../../images/logo.png';


const Header = () => {
    const navigate = useNavigate();
    const {user,logOut} = useFirebase();

    
    return (
        <div className='bg-black h-4/5 flex content-center justify-around'>
           <img className='mr-80 py-7 justify-self-start' src={logo} alt='logo'></img>
           <div className='pt-10 flex '>
                <h4 className='cursor-pointer text-white mx-5 text-lg'onClick={()=>navigate('/')} >Home</h4>
                <h4 className='cursor-pointer text-white mx-5 text-lg'onClick={()=>navigate('/myBooking')} >My Booking</h4>
                <h4 className='cursor-pointer text-white mx-5 text-lg'onClick={()=>navigate('')} >All Booking</h4>
            {
                user.email?
                    <h4 className='cursor-pointer text-white mx-5 text-lg'onClick={()=>logOut()} >Log Out</h4>
                    :
                    <h4 className='cursor-pointer text-white mx-5 text-lg'onClick={()=>navigate('/login')} >Login</h4>                
            }
               
            </div>  
        </div>
    );
};

export default Header;