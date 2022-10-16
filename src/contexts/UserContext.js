import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import React, {createContext, useEffect, useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import app from '../firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    // const navigate = useNavigate();
    // User State
    const [user, setUser] = useState({});
    const [isSuccess, setSuccess] = useState(false);
    const [showError, setShowError] = useState("");
    const [loading, setLoading] = useState(true);

    // All Providers
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Sign In With Google
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                console.log(error.message);
            });
    };

    // Sign In With Facebook
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    // Sign In With Github
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                console.log(error.message);
            });
    };

    // Registration With Email & Password
    const registrationWithEmailPassword = (email, password, form) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert("Please check your email address.");
                    });
            })
            .catch((error) => {
                setShowError(error.message);
            });
    };

    // Sign In With Email & Password
    const signInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setUser(user);
                // navigate("/");
            })
            .catch((error) => {
                setShowError(error.message);
            });
    };

    // Sign Out Function
    const signOutHandler = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            console.log(error.message);
        });
    };

    // why are we doing this?
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changed', currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);


    const authInfo = {
        signInWithGoogle,
        signInWithFacebook,
        signInWithGithub,
        registrationWithEmailPassword,
        signInWithEmailPassword,
        signOutHandler,
        user,
        isSuccess,
        setSuccess,
        showError,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;