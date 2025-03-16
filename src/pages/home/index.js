import React, { useEffect, useRef } from "react";
import {ContainerMain, DivPerfil, H1, IconPerfil} from "./styled"
import { ButtomCustom } from "components/buttomBack/styled";
import "./styled.css";
import { Link, Outlet } from "react-router-dom";
import Popoup from "components/popup";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

export default function HomeEmployee(props){

    const btnSettings = useRef();
    const popup = useRef();
    const token = useSelector((state) => state.auth.token);

    const data = () =>{
        return jwtDecode(token)
    } 

    console.log(data())

    const clickSettings = () =>{
        if(popup)
            popup.current.style.display = "flex";
    }
    
    return(
        
        <ContainerMain>

            <Popoup ref={popup}/>

            <DivPerfil>
                <div>
                    <IconPerfil/>
                    <p id="name">{props.name}</p>
                    <p id="work">{props.work}</p>
                </div>
    
                <ButtomCustom id="buttonConfig" ref={btnSettings} onClick={clickSettings}></ButtomCustom>
        
            </DivPerfil>
            <hr></hr>

            <Link id="linkPainel" to="painel"  className="link" value={"configurar"}> 
                    <H1>Painel geral</H1>
            </Link>

            <Outlet/>
            
        </ContainerMain>
    );
}
