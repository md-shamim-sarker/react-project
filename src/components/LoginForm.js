import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {LockClosedIcon} from '@heroicons/react/24/solid';
import FileLocation from './FileLocation';
import {getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/Firebase.init';

const auth = getAuth(app);

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/home");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
    };

    const resetPasswordHandler = () => {
        console.log(email);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent!');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    const onBlurHandler = (event) => {
        const email = event.target.value;
        setEmail(email);
    };


    return (
        <div>
            <div className='w-3/5 mx-auto flex flex-col items-center'>
                <h1 className='text-center my-5'>Log In Form</h1>
                <LockClosedIcon className='w-16'></LockClosedIcon>
                <form onSubmit={onSubmitHandler}>
                    <div className='grid grid-cols-1 gap-3'>
                        <div>
                            <h5>Email</h5>
                            <input onBlur={onBlurHandler} type="email" name="email" id="email" placeholder='Your Email' required />
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input type="password" name="password" id="password" placeholder='Your Password' required />
                        </div>
                    </div>

                    {
                        errorMessage &&
                        <>
                            <span className='text-red-700'>{errorMessage}</span><br />
                            Do you forget your password. <br />
                            <span onClick={resetPasswordHandler} className='text-blue-500 underline'>Reset password</span>
                        </>
                    }

                    <div className='flex items-center gap-x-2 mt-4'>
                        <button type='submit' className='ml-0 blue-btn'>Log In</button>
                        <p>You don't have an account? <NavLink to={"/registration"} className="underline text-blue-600">Registration</NavLink></p>
                    </div>
                </form>
            </div>
            <FileLocation file={"src/components/LoginForm.js"}></FileLocation>

        </div>
    );
};

export default LoginForm;