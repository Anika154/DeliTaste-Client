import React from 'react';
// import { useHistory, useLocation } from 'react-router';
import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';

const provider= new GoogleAuthProvider();
const Login = () => {
    // const history = useHistory();
    // const location = useLocation();
    // const redirect = location.state?.from || '/home';
    
    const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
    
    .then(res => {
        console.log(res);
        // history.push(redirect);
    })    
}




    return (
        <div>
            <h2 className='text-red-700 font-bold text-5xl m-24'>Please Login</h2>
            <button onClick={handleGoogleSignIn} className='bg-yellow-700 text-white p-3 rounded'>Google Sign in</button>
        </div>
    );
};

export default Login;