import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import FileLocation from './FileLocation';
import {UserGroupIcon} from '@heroicons/react/24/solid';
import {getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import app from '../firebase/Firebase.init';

const RegistrationForm = () => {
    const [showError, setShowError] = useState("");
    const [success, setSuccess] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setSuccess(false);
        const auth = getAuth(app);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6) {
            setSuccess(false);
            return;
        }
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

    return (
        <div className='w-4/5 lg:w-3/5 mx-auto flex flex-col items-center'>
            <h1 className='text-center my-3'>Registration Form</h1>
            <UserGroupIcon className='w-16 mb-3'></UserGroupIcon>
            <form onSubmit={onSubmitHandler}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <div>
                        <h5>First Name</h5>
                        <input type="text" name="fname" id="fname" />
                    </div>
                    <div>
                        <h5>Last Name</h5>
                        <input type="text" name="lname" id="lname" />
                    </div>
                    <div className='lg:col-span-2'>
                        <h5>Email <span className='text-red-700'>*</span></h5>
                        <input type="email" name="email" id="remail" placeholder='Enter your email address' required />
                    </div>
                    <div>
                        <h5>Password <span className='text-red-700'>*</span></h5>
                        <input type="password" name="password" id="rpassword" placeholder='Enter a new password' required />
                    </div>
                    <div>
                        <h5>Password Confirmation</h5>
                        <input type="password" name="cpassword" id="rcpassword" />
                    </div>
                </div>
                <p className='text-xs my-5'>
                    By creating an account, you agree to our
                    <NavLink to={"/termsAndConditions"}> <span className='underline text-blue-600'>term and conditions</span></NavLink>
                    <span> and </span>
                    <NavLink to={"/privacyPolicy"} className="underline text-blue-600">privacy policy</NavLink>.
                </p>
                <div className='text-red-600'>{showError}</div>
                {
                    success && <div className='text-green-700'>Success</div>
                }
                <div className='flex flex-col lg:flex-row items-center gap-x-2'>
                    <button type='submit' className='ml-0 blue-btn w-full lg:w-auto'>Create an account</button>
                    <p>Already have an account? <NavLink to={"/login"} className="underline text-blue-600">Log in</NavLink></p>
                </div>
            </form>
            <FileLocation file={"src/components/RegistrationForm.js"}></FileLocation>
        </div>
    );
};

export default RegistrationForm;