import React, {useContext} from 'react';
import {AuthContext} from '../contexts/UserContext';

const FacebookAuthentication = () => {

    const {signInWithFacebook, signOutHandler, user} = useContext(AuthContext);

    return (
        <div className='flex flex-col items-center my-5'>
            <h1>Firebase Authentication with Facebook</h1>
            {
                user.uid
                    ? <button onClick={signOutHandler} className="w-fit">Sign Out</button>
                    : <button onClick={signInWithFacebook} className="w-fit">Sign In</button>
            }

            {
                user.uid &&
                <div className='flex flex-col items-center'>
                    <h2>Name: {user.displayName}</h2>
                    <h3>Email: {user.email}</h3>
                    <img src={user.photoURL} alt="user_photo" />
                </div>
            }
        </div>
    );
};

export default FacebookAuthentication;