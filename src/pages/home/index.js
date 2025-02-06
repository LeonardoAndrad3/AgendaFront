import React, { useEffect } from "react";
import {ContainerMain, DivPerfil, DivPainel, IconPerfil} from "./styled"
import { ButtonCustom } from "components/buttonBack/styled";
import "./styled.css";
import { H1 } from "styles/Global/styled";
import { Link, Outlet } from "react-router-dom";


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

            <Link id="linkPainel" to="painel"  className="link" value={"configurar"}> 
                    <H1>Painel geral</H1>
            </Link>

            <Outlet/>

   

        </ContainerMain>
    );
}
