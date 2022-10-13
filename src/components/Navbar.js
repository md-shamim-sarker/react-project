import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handler = () => {
        if(!menu) {
            setMenu(true);
        } else {
            setMenu(false);
        }
        console.log(menu);
    };

    return (
        <>
            <div className='w-[90vw] lg:w-4/5 mx-auto flex justify-between items-center'>
                <div className='text-2xl font-extrabold'>MY NOTE</div>
                <div className='flex gap-x-5 items-center'>
                    <NavLink to={"/home"}>Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/mobile_aside"} className='block lg:hidden' onClick={handler}>
                        {
                            menu ? <Bars3Icon className='w-5 h-5'></Bars3Icon>
                                : <XMarkIcon className='w-5 h-5'></XMarkIcon>
                        }
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;