import React, {useState} from 'react';
import {getAuth, signInWithPopup, GithubAuthProvider, signOut} from "firebase/auth";
import app from '../firebase/Firebase.init';
import FileLocation from './FileLocation';

const provider = new GithubAuthProvider();
const auth = getAuth(app);

const GithubAuthentication = () => {
    const [user, setUser] = useState({});

    const signInHandler = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });
    };

    const signOutHandler = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className='flex flex-col items-center'>
            {
                user.uid
                    ? <button onClick={signOutHandler}>Sign Out</button>
                    : <button onClick={signInHandler}>Sign In</button>
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