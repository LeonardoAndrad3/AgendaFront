import React from "react";
import { Container, FormSignin } from "./styled";
import { Link} from "react-router-dom";
import { ButtonCustom } from "components/buttonBack/styled";
import axios from "config/axios";

export default function Form(){


    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        form.get("email");

        

    }




    return(
        <Container>
            <h1>Login</h1>

            <FormSignin onSubmit={handleSubmit}>

                <input name="email" type="email" placeholder="@gmai.com"/>
                <input name="password" type="password" placeholder="....."/>

                <ButtonCustom type="submit">next</ButtonCustom>

            </FormSignin>


            <Link to={"/login/register"}> Are you not register? </Link>
            <Link to={"/login/forgot"}> forgot your password? </Link>
        </Container> 
    )
}