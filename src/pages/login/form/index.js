import React from "react";
import { Container } from "./styled";
import { Link} from "react-router-dom";

export default function Form(){
    return(
        <Container>
            <h1>Login</h1>

            <input type="email"></input>
            <input type="password"></input>

            <button > Next </button>

            <Link to={"/login/register"}> Are you not register? </Link>
            <Link to={"/login/forgot"}> forgot your password? </Link>
        </Container> 
    )
}