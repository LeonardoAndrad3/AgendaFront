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
import Register from 'pages/agenda/registerService';
import SwiperAgenda from 'pages/agenda/swiperAgenda';
import ForgotPass from 'pages/login/forgotPass';
import ReceiveCode from 'pages/login/receiveCode';
import Form from 'pages/login/formSignIn';
import RegisterService from 'pages/registerService';
import RegisterClient from 'pages/registerClient';
import PainelGeral from 'pages/home/painelGeral';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children:[
            {   
                path:"painel",
                element:<PainelGeral/>,
                children:[
                   
                ]
            },
            {
                path: "agenda",
                element: <Agenda/>,
            },
            {   
                path: "services",
                element: <SwiperAgenda />,
            },
            
            
        ]
    },
    {
        path:"login",
        element: <Login />,
        children:[
            {
                path:"form",
                element: <Form />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "forgot",
                element: <ForgotPass/>,
                children:[
                    {
                        path: "code",
                        element: <ReceiveCode/>
                    },
                ]
            },
        ]
    },
    {
        path:"agenda",
        element: <Agenda />,
        children:[
            {
                path: "services",
                element: <SwiperAgenda />
            },
        ]
    },
    {

        path:"register",
        element: <RegisterService/>
    },
    {
        path:"signup",
        element: <RegisterClient/> 
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

