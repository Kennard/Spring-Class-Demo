import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContainer from './containers/AppContainer';
// router

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />
    }
])
// /pastComic
ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)