import React from "react";
import { Container, H1Login, Logindiv} from "./styled";
import { Link} from "react-router-dom";
import { ButtonCustom } from "components/buttonBack/styled";

import Form from "components/formSignInComp";

export default function FormSignIn(){

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