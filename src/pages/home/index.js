import React from "react";
import {ContainerMain, DivPerfil, DivPainel, IconPerfil} from "./styled"
import { ButtonCustom } from "components/buttonBack/styled";
import { H1 } from "styles/Global/styled";
import "./styled.css";


export default function App(){
    return(
        <ContainerMain>

            <DivPerfil>
                <div>
                    <IconPerfil/>
                    <p id="name">Mariana</p>
                    <p id="work">Nail designer</p>
                </div>
 
    
                <ButtonCustom>config</ButtonCustom>
        
            </DivPerfil>
            <hr></hr>
            <DivPainel>
                <H1>Painel geral</H1>
                
                <ButtonCustom>Agenda<span className="agenda icon"></span></ButtonCustom>
                <ButtonCustom>Calendário<i className="calendario icon"></i></ButtonCustom>
                <ButtonCustom>Registro<i className="registro icon"></i></ButtonCustom>
                <ButtonCustom>Personalizar<i className="personalizar icon"></i></ButtonCustom>
                <ButtonCustom id="dash">DashBoard<i className="dashboard icon"></i></ButtonCustom>
            </DivPainel>

        
        </ContainerMain>
    );
}
