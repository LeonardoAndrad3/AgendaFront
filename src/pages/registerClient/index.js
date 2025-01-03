import AllInput from "components/allInput";
import {Container,ContainerForm, ButtonRegister,H1Register} from "./styled"
import "./styled.css"
import React, { useEffect, useState } from "react";
import Button from "components/buttonBack";
import { H1 } from "styles/Global/styled";
import { json } from "react-router-dom";
import axios from "config/axios";

class Endereco{
    constructor(e){
        this.logradouro = e.logradouro;
        this.bairro = e.bairro;
        this.cep = e.cep;
        this.uf = e.uf;
        this.localidade = e.localidade;
        this.numero = e.numero;
        this.complemento = e.complemento
        this.estado = e.estado
    }
}

export default function RegisterClient(){

    var responseCep;


    useEffect(()=>{ 

        const rua = document.getElementById("rua");

    })

    const signUp = (e) =>{
        e.preventDefault();

        const dataForm = new FormData(e.currentTarget);
        const num = dataForm.get("numero")
        // responseCep.numero = num;

        // dataForm.delete("numero");
        // dataForm.delete("cep");
        
        dataForm.append("endereco", JSON.stringify(responseCep))

        const data = Object.fromEntries(dataForm.entries())

        console.log(dataForm);
        console.log(data)
    }

    const consultarCep = (e) =>{
        const size = e.target.value.toString().length;
        const cep = e.target.value;

        if(size === 8)
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(e =>{
                        var response = new Endereco(e.data);
                        responseCep = e.data;                        
                    })
                    .catch(e =>{
                        console.log("falha!")
                    })
    }


    return(
        <Container className="containerMain">

            <H1Register>Olá, seja bem-vindo</H1Register>

            <div id="boxTalking">
                <p>Preencha o formulário <br/> a baixo para prosseguir</p>
            </div>
            
            <ContainerForm id="formSignUp" method="POST" onSubmit={signUp}>
                <input  name="name" type="text" placeholder="Nome"/>
                <input  name="CPF" type="text" placeholder="CPF"/>
                <input  name="email" type="email" placeholder="E-mail"/>
                <input  name="phone" type="tel" placeholder="Telefone"/>
                <input  onInput={consultarCep} name="cep" id="cep" type="text" placeholder="Cep"/>
                <section id="logadouro">
                    <input id="rua" disabled type="text" placeholder="Rua"/>
                    <input  name="numero" id="num" type="text" placeholder="Num"/>
                </section>
                <input  id="inputSenha" name="password" type="password" placeholder="Senha"/>
                <input  id="inputSenhaConfirma" name="conSenha" type="password" placeholder="Confirmar Senha"/>
                <ButtonRegister id="buttonRegister" type="submit"/>
            </ContainerForm>
        </Container>
    )



}