import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from '../components/About';
import EmailPasswordAuthentication from '../components/EmailPasswordAuthentication';
import FacebookAuthentication from '../components/FacebookAuthentication';
import GithubAuthentication from '../components/GithubAuthentication';
import GoogleAuthentication from '../components/GoogleAuthentication';
import Home from '../components/Home';
import LoginForm from '../components/LoginForm';
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
                    path: "/",
                    element: <Home></Home>
                },
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
                    path: "/typewriter-effect",
                    element: <TypeWriterEffect></TypeWriterEffect>
                },
            ]
        },
    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default MyRouter;