import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {HomeIcon, UserCircleIcon} from '@heroicons/react/24/solid';
import {AuthContext} from '../contexts/UserContext';

const Navbar = () => {
    const {user} = useContext(AuthContext);
    const {displayName, photoURL, uid, email} = user;
    const image = "https://static.vecteezy.com/system/resources/thumbnails/009/734/569/small/default-avatar-profile-icon-social-media-user-photo-vector.jpg";

    return (
        <>
            <div className='w-[90vw] lg:w-4/5 mx-auto flex justify-between items-center'>
                <div className='text-2xl font-extrabold'>MY NOTE</div>
                <div className='flex gap-x-5 items-center'>
                    <NavLink to={"/home"} className="flex gap-x-1">
                        <HomeIcon className='w-5'></HomeIcon>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={"/about"} className="flex gap-x-1">
                        <UserCircleIcon className='w-5'></UserCircleIcon>
                        <span>About</span>
                    </NavLink>
                    {
                        uid &&
                        <div className='flex gap-x-2 items-center'>
                            <div>{displayName ? displayName : email}</div>
                            <div>
                                <img src={photoURL ? photoURL : image} alt="user_photo" className='w-7 h-7 rounded-full' />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;