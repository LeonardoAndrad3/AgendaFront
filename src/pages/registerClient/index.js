import AllInput from "components/allInput";
import {Container,ContainerForm, ButtonRegister,H1Register} from "./styled"
import "./styled.css"
import React, { useEffect, useRef, useState } from "react";
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

    const [responseCep, setResponseCep] = useState();
    const [responseData, setResponseData] = useState();
    
    const rua = useRef();

    const signUp = (e) => {
        e.preventDefault();

        const dataForm = new FormData(e.currentTarget);
        const num = dataForm.get("numero")
        responseCep.numero = num;

        dataForm.delete("numero");
        dataForm.delete("conSenha");
        var jsonSend =  Object.fromEntries(dataForm.entries());
        jsonSend.endereco = responseCep;
        
        setResponseData(jsonSend);

        axios.post("/client", jsonSend,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((e)=>{
            console.log(e)
        })
        .catch((e=>{
            console.log(e)
        }))
    }
    

    const validPassword = (e) =>{

        const passwordVerification = e.target.value;
        const passwordToConfirm = e.target.form.children.password.value;

        if(passwordVerification){

        }
        
    }


    const consultarCep = (e) =>{
        const size = e.target.value.toString().length;
        const cep = e.target.value;

        if(size === 8)
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(e =>{
                        var response = new Endereco(e.data);
                        rua.current.value = response.logradouro;

                        setResponseCep(response)
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
                <input required name="name" type="text" placeholder="Nome"/>
                <input required name="CPF" type="text" placeholder="CPF"/>
                <input required name="email" type="email" placeholder="E-mail"/>
                <input required name="phone" type="tel" placeholder="Telefone"/>
                <input required onInput={consultarCep} id="cep" type="text" placeholder="Cep"/>
                <section id="logadouro">
                    <input  id="rua" ref={rua} disabled type="text" placeholder="Rua"/>
                    <input required name="numero" id="num" type="text" placeholder="Num"/>
                </section>
                <input required id="inputSenha" name="password" type="password" placeholder="Senha"/>
                <input onChange={validPassword} required id="inputSenhaConfirma" name="conSenha" type="password" placeholder="Confirmar Senha"/>
                <ButtonRegister id="buttonRegister" type="submit"/>
            </ContainerForm>
        </Container>
    )



}