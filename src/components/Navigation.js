import React from 'react';
import {ChevronDownIcon, UserGroupIcon} from '@heroicons/react/24/solid';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="flex h-screen flex-col bg-white relative">
            <span className="block h-10 w-full bg-gray-200 sticky top-0 z-99 text-center font-bold text-gray-700 pt-2">
                All Concepts
            </span>

            <nav className="flex flex-col space-y-1">
                <details className="group">
                    <summary
                        className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i className="fa-solid fa-fire-flame-curved text-sm"></i>
                        <span className="ml-3 text-sm font-medium">Firebase Authentication</span>
                        <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                            <ChevronDownIcon className='w-4'></ChevronDownIcon>
                        </span>
                    </summary>
                    <nav className="mt-1.5 ml-8 flex flex-col">
                        <NavLink to={"/google"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-brands fa-google text-sm"></i>
                                <span className="ml-1 text-xs font-medium">Google</span>
                            </div>
                        </NavLink>
                        <NavLink to={"/github"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-brands fa-github text-sm"></i>
                                <span className="ml-1 text-xs font-medium">Github</span>
                            </div>
                        </NavLink>
                        <NavLink to={"/email_password"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-envelope-circle-check text-sm"></i>
                                <span className="ml-1 text-xs font-medium">Email-Password</span>
                            </div>
                        </NavLink>
                        <NavLink>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <UserGroupIcon className='w-4'></UserGroupIcon>
                                <span className="ml-1 text-xs font-medium">Sub Options</span>
                            </div>
                        </NavLink>
                    </nav>
                </details>
                <details className="group">
                    <summary
                        className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <UserGroupIcon className='w-5'></UserGroupIcon>
                        <span className="ml-3 text-sm font-medium">Main Option</span>
                        <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                            <ChevronDownIcon className='w-4'></ChevronDownIcon>
                        </span>
                    </summary>
                    <nav className="mt-1.5 ml-8 flex flex-col">
                        <NavLink>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <UserGroupIcon className='w-4'></UserGroupIcon>
                                <span className="ml-1 text-xs font-medium">Sub Options</span>
                            </div>
                        </NavLink>
                        <NavLink>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <UserGroupIcon className='w-4'></UserGroupIcon>
                                <span className="ml-1 text-xs font-medium">Sub Options</span>
                            </div>
                        </NavLink>
                        <NavLink>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <UserGroupIcon className='w-4'></UserGroupIcon>
                                <span className="ml-1 text-xs font-medium">Sub Options</span>
                            </div>
                        </NavLink>
                        <NavLink>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <UserGroupIcon className='w-4'></UserGroupIcon>
                                <span className="ml-1 text-xs font-medium">Sub Options</span>
                            </div>
                        </NavLink>
                    </nav>
                </details>
            </nav>
        </div>
    );
};

export default Navigation;