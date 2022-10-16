import React, {useContext} from 'react';
import {AuthContext} from '../contexts/UserContext';
import FileLocation from './FileLocation';

const GithubAuthentication = () => {
    const {signInWithGithub, signOutHandler, user} = useContext(AuthContext);

    return (
        <div className='flex flex-col items-center my-5'>
            <h1>Firebase Authentication with Github</h1>
            {
                user.uid
                    ? <button onClick={signOutHandler}>Sign Out</button>
                    : <button onClick={signInWithGithub}>Sign In</button>
            }
            {
                user.uid && <>
                    <h2>Name: {user.displayName}</h2>
                    <img src={user.photoURL} alt="user_photo" />
                </>
            }
            <FileLocation file={"src/components/GithubAuthentication.js"}></FileLocation>
        </div>
    );
};

export default GithubAuthentication;