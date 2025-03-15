import React from "react";
import { Container, H1Login, Logindiv} from "./styled";
import { Link} from "react-router-dom";
import Form from "components/formSignInComp";
import AuthVerification from "store/authVerification";

export default function FormSignIn(){
    return(
        <Container>
            <AuthVerification/>
            <Logindiv>
                
                <H1Login>Login</H1Login>

                <Form/>

                <Link className="link" to={"/login/register"}> Are you not register? </Link>
                <Link className="link" to={"/login/forgot"}> forgot your password? </Link>
            </Logindiv>
        </Container> 
    )
}