import { Container, Form} from "./styled"
import Button from "components/buttonBack"
import {login} from "auth/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormSignInComp(){

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const obj = Object.fromEntries(form.entries())
        
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

                <Button color_b={"#9E277D"} color_t={"white"} w={"50%"} h={"40px"} r={"8px"} value={"Entrar"} type="submit" valu>next</Button>
            </Form>
        </Container>
    )
}