import React, { useEffect, useRef, useState } from "react";
import {ContainerMain, DivPerfil, H1, IconPerfil} from "./styled"
import { ButtomCustom } from "components/buttomBack/styled";
import "./styled.css";
import { Link, Outlet } from "react-router-dom";
import Popoup from "components/popup";

export default function HomeEmployee(){

    const btnSettings = useRef();
    const popup = useRef();
    const [user, setUser] =  useState();

     useEffect(()=>{
         setUser(JSON.parse(localStorage.getItem("infoUser")));
     },[])
     
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
                    <p id="name">{user?.name}</p>
                    <p id="work">{user?.work}</p>
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
