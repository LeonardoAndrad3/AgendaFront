import { Container, Form} from "./styled"
import { ButtonCustom } from "components/buttonBack/styled"
import {login} from "auth/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormSignInComp(){

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        
        var obj = {}
        form.forEach((v, k) =>{
            obj[k] = v;
        })

        var dataLogin = JSON.stringify(obj);

        login(dataLogin)
        .then((data) =>{
            console.log(data)
        })
        .catch((err) =>{
            console.log(err)
        });
    }

    return(
        <Container>
            <Form 
                height={"350px"} 
                width={"350px"} 
                className={"formSingin"} 
                onSubmit={handleSubmit}
            >

                <input name="email" type="email" placeholder="@gmai.com"/>
                <input name="password" type="password" placeholder="....."/>

                <ButtonCustom type="submit">next</ButtonCustom>
            </Form>
        </Container>
    )
}