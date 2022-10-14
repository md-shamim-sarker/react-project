import React, {useState} from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import app from '../firebase/Firebase.init';
import FileLocation from './FileLocation';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);


const GoogleAuthentication = () => {

    const [user, setUser] = useState({});

    const signInHandler = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
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
        <div className='flex flex-col items-center my-5 relative'>
            <h1>Firebase Authentication with Google</h1>
            {
                user.uid
                    ? <button onClick={signOutHandler} className='btn-blue'>Sign Out</button>
                    : <button onClick={signInHandler} className='btn-blue'>Sign In</button>
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