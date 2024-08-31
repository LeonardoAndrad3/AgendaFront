import React from "react";
import { Container} from "./styled";
import { Link} from "react-router-dom";
import { ButtonCustom } from "components/buttonBack/styled";

import Form from "components/formSignInComp";

export default function FormSignIn(){

    return(
        <Container>
            <h1>Login</h1>

            <Form/>

            <Link to={"/login/register"}> Are you not register? </Link>
            <Link to={"/login/forgot"}> forgot your password? </Link>
        </Container> 
    )
}