import React, { useEffect } from "react";
import {ContainerMain, DivPerfil, H1, IconPerfil} from "./styled"
import { ButtomCustom } from "components/buttomBack/styled";
import "./styled.css";
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
    
                <ButtomCustom id="buttonConfig"></ButtomCustom>
        
            </DivPerfil>
            <hr></hr>

            <Link id="linkPainel" to="/painel"  className="link" value={"configurar"}> 
                    <H1>Painel geral</H1>
            </Link>

            <Outlet/>
            
        </ContainerMain>
    );
}
