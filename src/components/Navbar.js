import React from 'react';
import {NavLink} from 'react-router-dom';
import {HomeIcon, UserCircleIcon} from '@heroicons/react/24/solid';

const Navbar = () => {
    return (
        <>
            <div className='w-[90vw] lg:w-4/5 mx-auto flex justify-between items-center'>
                <div className='text-2xl font-extrabold'>MY NOTE</div>
                <div className='flex gap-x-5 items-center'>
                    <NavLink to={"/home"} className="flex">
                        <HomeIcon className='w-5'></HomeIcon>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={"/about"} className="flex">
                        <UserCircleIcon className='w-5'></UserCircleIcon>
                        <span>About</span>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;