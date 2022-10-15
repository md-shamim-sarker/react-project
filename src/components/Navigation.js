import React from 'react';
import {ChevronDownIcon} from '@heroicons/react/24/solid';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="flex h-auto flex-col bg-white relative">
            <span className="block h-10 w-full bg-gray-200 sticky top-0 z-99 text-center font-bold text-gray-700 pt-2">
                All Concepts
            </span>

            <nav className="flex flex-col space-y-1">

                {/* Firebase Authentication */}
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

                        {/* Google Authentication */}
                        <NavLink to={"/google"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-brands fa-google text-sm"></i>
                                <span className="ml-1 text-xs font-medium">Google</span>
                            </div>
                        </NavLink>

                        {/* Facebook Authentication */}
                        <NavLink to={"/facebook"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-brands fa-facebook text-sm"></i>
                                <span className="ml-1 text-xs font-medium">Facebook</span>
                            </div>
                        </NavLink>

                        {/* Github Authentication */}
                        <NavLink to={"/github"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-brands fa-github text-sm"></i>
                                <span className="ml-1 text-xs font-medium">Github</span>
                            </div>
                        </NavLink>

                        {/* Email Password Authentication */}
                        <NavLink to={"/email_password"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-envelope-circle-check text-sm"></i>
                                <span className="ml-1 text-xs font-medium">Email-Password</span>
                            </div>
                        </NavLink>
                    </nav>
                </details>

                {/* Legal Procedures */}
                <details className="group">
                    <summary
                        className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i className="fa-solid fa-scale-balanced"></i>
                        <span className="ml-3 text-sm font-medium">Legal Procedures</span>
                        <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                            <ChevronDownIcon className='w-4'></ChevronDownIcon>
                        </span>
                    </summary>
                    <nav className="mt-1.5 ml-8 flex flex-col">

                        {/* Tearms & Conditions */}
                        <NavLink to={"/termsAndConditions"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-signature"></i>
                                <span className="ml-1 text-xs font-medium">Terms & Conditions</span>
                            </div>
                        </NavLink>

                        {/* Privacy Policies */}
                        <NavLink to={"/privacyPolicy"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-signature"></i>
                                <span className="ml-1 text-xs font-medium">Privacy Policies</span>
                            </div>
                        </NavLink>
                    </nav>
                </details>

                {/* My Assignments */}
                <details className="group">
                    <summary
                        className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i className="fa-solid fa-paste"></i>
                        <span className="ml-3 text-sm font-medium">My Assignments</span>
                        <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                            <ChevronDownIcon className='w-4'></ChevronDownIcon>
                        </span>
                    </summary>
                    <nav className="mt-1.5 ml-8 flex flex-col">

                        {/* Assignment 1 */}
                        <NavLink to={"/assignment1"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 01</span>
                            </div>
                        </NavLink>
                        <div onClick={() => window.open('https://github.com/shamimspro/donate-today/', '_blank')} className='cursor-pointer'>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-code"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 01</span>
                            </div>
                        </div>

                        {/* Assignment 2 */}
                        <NavLink to={"/assignment2"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 02</span>
                            </div>
                        </NavLink>
                        <div onClick={() => window.open('https://github.com/shamimspro/fifa-world-cup/', '_blank')} className='cursor-pointer'>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-code"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 02</span>
                            </div>
                        </div>

                        {/* Assignment 3 */}
                        <NavLink to={"/assignment3"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 03</span>
                            </div>
                        </NavLink>
                        <div onClick={() => window.open('https://github.com/shamimspro/digital-education/', '_blank')} className='cursor-pointer'>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-code"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 03</span>
                            </div>
                        </div>

                        {/* Assignment 4 */}
                        <NavLink to={"/assignment4"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 04</span>
                            </div>
                        </NavLink>
                        <div onClick={() => window.open('https://github.com/shamimspro/javascript-problem-solving', '_blank')} className='cursor-pointer'>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-code"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 04</span>
                            </div>
                        </div>

                        {/* Assignment 5 */}
                        <NavLink to={"/assignment5"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 05</span>
                            </div>
                        </NavLink>
                        <div onClick={() => window.open('https://github.com/programming-hero-web-course2/best-five-dom-assignment-shamimspro', '_blank')} className='cursor-pointer'>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-code"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 05</span>
                            </div>
                        </div>

                        {/* Assignment 6 */}
                        <NavLink to={"/assignment6"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 06</span>
                            </div>
                        </NavLink>
                        <div onClick={() => window.open('https://github.com/Programming-Hero-Web-Course4/b6-news-portal-assignment-shamimspro', '_blank')} className='cursor-pointer'>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-code"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 06</span>
                            </div>
                        </div>

                        {/* Assignment 7 */}
                        <NavLink to={"/assignment7"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 07</span>
                            </div>
                        </NavLink>
                        <div onClick={() => window.open('https://github.com/programming-hero-web-course1/b6-type-monster-debug-assignment-shamimspro', '_blank')} className='cursor-pointer'>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-code"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 07</span>
                            </div>
                        </div>

                        {/* Assignment 8 */}
                        <NavLink to={"/assignment8"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 08</span>
                            </div>
                        </NavLink>
                        <div onClick={() => window.open('https://github.com/Programming-Hero-Web-Course4/b6-ultra-active-club-shamimspro', '_blank')} className='cursor-pointer'>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-code"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 08</span>
                            </div>
                        </div>

                        {/* Assignment 9 */}
                        <NavLink to={"/assignment9"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 09</span>
                            </div>
                        </NavLink>
                        <div onClick={() => window.open('', '_blank')} className='cursor-pointer'>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-code"></i>
                                <span className="ml-1 text-xs font-medium">Assignment 09</span>
                            </div>
                        </div>
                    </nav>
                </details>

                {/* Third Party Library */}
                <details className="group">
                    <summary
                        className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <i className="fa-solid fa-scale-balanced"></i>
                        <span className="ml-3 text-sm font-medium">Third Party Library</span>
                        <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                            <ChevronDownIcon className='w-4'></ChevronDownIcon>
                        </span>
                    </summary>
                    <nav className="mt-1.5 ml-8 flex flex-col">

                        {/* Type Writter Effect */}
                        <NavLink to={"/typewriter-effect"}>
                            <div className="flex items-center rounded-lg px-1 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                <i className="fa-solid fa-file-signature"></i>
                                <span className="ml-1 text-xs font-medium">typewritter-effect</span>
                            </div>
                        </NavLink>
                    </nav>
                </details>
            </nav>
        </div>
    );
};

export default Navigation;