# We can retrieve form data in five ways.
## Way 1
```js
import React from 'react';
import {NavLink} from 'react-router-dom';
import {LockClosedIcon} from '@heroicons/react/24/solid';
import FileLocation from './FileLocation';

const LoginForm = () => {

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.email.value);
        console.log(event.target.password.value);
    };

    return (
        <div>
            <div className='w-3/5 mx-auto flex flex-col items-center'>
                <h1 className='text-center my-5'>Log In Form</h1>
                <LockClosedIcon className='w-16'></LockClosedIcon>
                <form onSubmit={submitHandler}>
                    <div className='grid grid-cols-1 gap-3'>
                        <div>
                            <h5>Email</h5>
                            <input type="email" name="email" id="email" placeholder='Your Email' />
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input type="password" name="password" id="password" placeholder='Your Password' />
                        </div>
                    </div>
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
```

## Some more handlers
```js
 const onChangeHandler = (event) => {
        console.log(event.target.value);
    };

const onBlurHandler = (event) => {
        console.log(event.target.value);
    };
```