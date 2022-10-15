import React, {useState} from 'react';
import {getAuth, signInWithPopup, FacebookAuthProvider, signOut} from "firebase/auth";
import app from '../firebase/Firebase.init';


const FacebookAuthentication = () => {
    const [user, setUser] = useState({});

    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();

    const signInHandler = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    const signOutHandler = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            console.log(error);
        });

    };

    return (
        <div className='flex flex-col items-center my-5'>
            <h1>Firebase Authentication with Facebook</h1>
            {
                user.uid
                    ? <button onClick={signOutHandler} className="w-fit">Sign Out</button>
                    : <button onClick={signInHandler} className="w-fit">Sign In</button>
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