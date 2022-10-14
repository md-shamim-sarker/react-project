import React from 'react';
import {Outlet} from 'react-router-dom';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <>
            <div className='w-full h-[8vh] lg:h-[10vh] bg-blue-700 text-blue-50 fixed top-0 py-4 lg:py-2 z-10 flex justify-center items-center'>
                <Navbar></Navbar>
            </div>
            <div>
                <div>
                    <Aside></Aside>
                </div>
                <div className='w-full lg:w-[80vw] h-[92vh] lg:h-[90vh] mt-[8vh] lg:mt-[10vh] fixed right-0 lg:overflow-y-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Main;