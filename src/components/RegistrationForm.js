import React from 'react';
import {NavLink} from 'react-router-dom';
import FileLocation from './FileLocation';
import {UserGroupIcon} from '@heroicons/react/24/solid';


const RegistrationForm = () => {
    return (
        <div className='w-3/5 mx-auto flex flex-col items-center'>
            <h1 className='text-center my-3'>Registration Form</h1>
            <UserGroupIcon className='w-16 mb-3'></UserGroupIcon>
            <form>
                <div className='grid grid-cols-2 gap-3'>
                    <div>
                        <h5>First Name</h5>
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <h5>Last Name</h5>
                        <input type="text" name="" id="" />
                    </div>
                    <div className='col-span-2'>
                        <h5>Email</h5>
                        <input type="email" name="" id="" />
                    </div>
                    <div>
                        <h5>Password</h5>
                        <input type="password" name="" id="" />
                    </div>
                    <div>
                        <h5>Password Confirmation</h5>
                        <input type="password" name="" id="" />
                    </div>
                </div>
                <p className='text-xs my-5'>
                    By creating an account, you agree to our
                    <NavLink> <span className='underline text-blue-600'>term and conditions</span></NavLink>
                    <span> and </span>
                    <NavLink className="underline text-blue-600">privacy policy</NavLink>.
                </p>
                <div className='flex items-center gap-x-2'>
                    <button className='ml-0'>Create an account</button>
                    <p>Already have an account? <NavLink to={"/login"} className="underline text-blue-600">Log in</NavLink></p>
                </div>
            </form>
            <FileLocation file={"src/components/RegistrationForm.js"}></FileLocation>
        </div>
    );
};

export default RegistrationForm;