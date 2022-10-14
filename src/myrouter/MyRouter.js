import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from '../components/About';
import GithubAuthentication from '../components/GithubAuthentication';
import GoogleAuthentication from '../components/GoogleAuthentication';
import Home from '../components/Home';
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
                    path: "/github",
                    element: <GithubAuthentication></GithubAuthentication>
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