import React, {useContext} from 'react';
import FileLocation from './FileLocation';
import {AuthContext} from '../contexts/UserContext';

const GoogleAuthentication = () => {
    const {signInWithGoogle, signOutHandler, user} = useContext(AuthContext);

    return (
        <div className='flex flex-col items-center my-5 relative'>
            <h1>Firebase Authentication with Google</h1>
            {
                user.uid
                    ? <button onClick={signOutHandler} className='btn-blue'>Sign Out</button>
                    : <button onClick={signInWithGoogle} className='btn-blue'>Sign In</button>
            }

            <div className={`flex flex-col items-center gap-5 h-56 ${user.uid ? 'visible' : 'invisible'}`}>
                <h2>Name: {user.displayName}</h2>
                <h3>Email: {user.email}</h3>
                <img src={user.photoURL} alt="user_photo" className='w-32' />
            </div>
            <FileLocation file={"src/components/GoogleAuthentication.js"}></FileLocation>
        </div>
    );
};

export default GoogleAuthentication;