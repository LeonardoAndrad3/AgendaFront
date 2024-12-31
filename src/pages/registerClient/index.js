import AllInput from "components/allInput";
import {Container,ContainerForm, ButtonRegister,H1Register} from "./styled"
import "./styled.css"
import React from "react";
import Button from "components/buttonBack";
import { H1 } from "styles/Global/styled";

export default function RegisterClient(){
    return(
        <Container className="containerMain">

            <H1Register>Olá, seja bem-vindo</H1Register>

            <div id="boxTalking">
                <p>Preencha o formulário <br/> a baixo para prosseguir</p>
            </div>
            

            <ContainerForm>
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="CPF"/>
                <input type="email" placeholder="E-mail"/>
                <input type="tel" placeholder="Telefone"/>
                <input id="cep" type="text" placeholder="Cep"/>
                <section id="logadouro">
                    <input type="text" placeholder="Rua"/>
                    <input id="num" type="text" placeholder="Num"/>
                </section>
                <input type="text" placeholder="Senha"/>
                <input type="text" placeholder="Confirmar Senha"/>
                <ButtonRegister id="buttonRegister" type="submit"/>
            </ContainerForm>


        </Container>
    )
}