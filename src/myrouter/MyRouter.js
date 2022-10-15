import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Assignment1 from '../assignments/Assignment1';
import Assignment2 from '../assignments/Assignment2';
import Assignment3 from '../assignments/Assignment3';
import Assignment4 from '../assignments/Assignment4';
import Assignment5 from '../assignments/Assignment5';
import Assignment6 from '../assignments/Assignment6';
import Assignment7 from '../assignments/Assignment7';
import Assignment8 from '../assignments/Assignment8';
import Assignment9 from '../assignments/Assignment9';
import About from '../components/About';
import EmailPasswordAuthentication from '../components/EmailPasswordAuthentication';
import FacebookAuthentication from '../components/FacebookAuthentication';
import GithubAuthentication from '../components/GithubAuthentication';
import GoogleAuthentication from '../components/GoogleAuthentication';
import Home from '../components/Home';
import LoginForm from '../components/LoginForm';
import OffCanvas from '../components/OffCanvas';
import PrivacyPolicy from '../components/PrivacyPolicy';
import RegistrationForm from '../components/RegistrationForm';
import TermsAndConditions from '../components/TermsAndConditions';
import TypeWriterEffect from '../components/TypeWriterEffect';
import Main from '../layout/Main';

const MyRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/home",
                    element: <Home></Home>
                },
                {
                    path: "/about",
                    element: <About></About>
                },
                {
                    path: "/google",
                    element: <GoogleAuthentication></GoogleAuthentication>
                },
                {
                    path: "/facebook",
                    element: <FacebookAuthentication></FacebookAuthentication>
                },
                {
                    path: "/github",
                    element: <GithubAuthentication></GithubAuthentication>
                },
                {
                    path: "/email_password",
                    element: <EmailPasswordAuthentication></EmailPasswordAuthentication>
                },
                {
                    path: "/login",
                    element: <LoginForm></LoginForm>
                },
                {
                    path: "/registration",
                    element: <RegistrationForm></RegistrationForm>
                },
                {
                    path: "/termsAndConditions",
                    element: <TermsAndConditions></TermsAndConditions>
                },
                {
                    path: "/privacyPolicy",
                    element: <PrivacyPolicy></PrivacyPolicy>
                },
                {
                    path: "/assignment1",
                    element: <Assignment1></Assignment1>
                },
                {
                    path: "/assignment2",
                    element: <Assignment2></Assignment2>
                },
                {
                    path: "/assignment3",
                    element: <Assignment3></Assignment3>
                },
                {
                    path: "/assignment4",
                    element: <Assignment4></Assignment4>
                },
                {
                    path: "/assignment5",
                    element: <Assignment5></Assignment5>
                },
                {
                    path: "/assignment6",
                    element: <Assignment6></Assignment6>
                },
                {
                    path: "/assignment7",
                    element: <Assignment7></Assignment7>
                },
                {
                    path: "/assignment8",
                    element: <Assignment8></Assignment8>
                },
                {
                    path: "/assignment9",
                    element: <Assignment9></Assignment9>
                },
                {
                    path: "/typewriter-effect",
                    element: <TypeWriterEffect></TypeWriterEffect>
                },
            ]
        },
        {
            path: "/offcanvas",
            element: <OffCanvas></OffCanvas>
        }
    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default MyRouter;