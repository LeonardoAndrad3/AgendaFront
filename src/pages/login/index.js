import React from "react";
import { Container, H1Login, Logindiv} from "./styled";
import { Link, Navigate} from "react-router-dom";
import Form from "components/formSignInComp";
import { useSelector } from "react-redux";

export default function FormSignIn(){

    const token = useSelector(state => state.auth.token) || localStorage.getItem('token')

    if(token)
        return <Navigate to={"/"} replace/>

    return(
        <Container>
            <Logindiv>
                
                <H1Login>Login</H1Login>

                <Form/>

                <Link className="link" to={"/login/register"}> Are you not register? </Link>
                <Link className="link" to={"/login/forgot"}> forgot your password? </Link>
            </Logindiv>
        </Container> 
    )
}