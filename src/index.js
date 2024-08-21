import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './styles/Global/index.css' 

import Agenda from './pages/agenda/index';
import Login from "./pages/login"
import ErrorPage from "./pages/erroPage/e404"
import App from "./pages/home"

import "./styles/themes/default/index.css"

import { createRoot } from 'react-dom/client';
import{
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path:"login",
        element: <Login />,
    },
    {
        path:"agenda",
        element: <Agenda />
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

