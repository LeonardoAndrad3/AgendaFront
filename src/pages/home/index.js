import React from "react";
import { Link } from "react-router-dom";



export default function App(){
    return(
        <>

            <h1>Welcome to charis!</h1>

            <Link to="/agenda"> Agenda</Link>

            <Link to="/login/form">Login</Link>
        
        </>
    );
}
