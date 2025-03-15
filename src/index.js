import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './styles/Global/index.css' 

import Agenda from './pages/agenda/index';
import Login from "./pages/login"
import ErrorPage from "./pages/erroPage/e404"
import App from "./pages/home"

import "./styles/themes/default/index.css"

import{
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import ForgotPass from 'pages/login/forgotPass';
import ReceiveCode from 'pages/login/receiveCode';
import RegisterService from 'pages/registerService';
import RegisterClient from 'pages/registerClient';
import PainelGeral from 'pages/home/painelGeral';
import PainelGeralCl from 'pages/homeClient/painelClient';
import HomeClient from 'pages/homeClient';
import Calendario from 'pages/home/calendario';
import { Provider } from 'react-redux';
import store from 'store/store';
import AuthApp from 'store/authApp';
import Unauthorized from "store/unauthorized"

const router = createBrowserRouter([
    {   
        element: <Unauthorized/>,
        path: "authErr"
    },
    {
        element: <AuthApp allowdRoles={["ROLE_EMPLOYEE"]}/>,
        errorElement: <ErrorPage />,
        children:[
            {   
                path: "/emp",
                element: <App/>,
                errorElement: <ErrorPage />,
                children:[
                    {   
                        path:"painel",
                        element:<PainelGeral/>,
                    },
                    {
                        path: "agenda",
                        element: <Agenda/>,
                    },
                    {
                        path:"calendario",
                        element: <Calendario/>,
                    },
                ]
            },
        ]
    },
    {
        element: <AuthApp allowdRoles={["ROLE_CLIENT"]}/>,
        errorElement: <ErrorPage />,
        children:[
            {   
                path: "/client",
                element: <HomeClient/>,
                errorElement: <ErrorPage />,
                children:[
                    {   
                        path:"painel",
                        element:<PainelGeralCl/>,
                    }, 
                    {
                        path:"agenda",
                        element: <Agenda />,
                    },
                    {
                        path:"calendario",
                        element: <Calendario/>,
                    },
                    {
                        path:"addService",
                        element: <RegisterService/>
                    }
                ]
            },
        ]
    },
    {
        path:"/",
        element: <Login />,
        children:[
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
        path: "register",
        element: <RegisterClient />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </Provider>
);

