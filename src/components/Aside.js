import React from 'react';
import Navigation from './Navigation';

const Aside = () => {
    return (
        <div>
            <div className='hidden lg:block w-[20vw] h-[90vh] fixed top-[10vh] overflow-y-scroll z-10 bg-blue-300'>
                <Navigation></Navigation>
            </div>
        </div>
    );
};

export default Aside;