import React from "react";
import {DivPainel} from "../styled"
import { H1 } from "styles/Global/styled";
import { Link, Outlet } from "react-router-dom";
import { ButtonCustom } from "components/buttonBack/styled";
import "../styled.css";


export default function PainelGeral(){
    return(

        <DivPainel className="ContentPainel">

        <ButtonCustom className="link"><Link to="agenda">Agenda<span className="agenda icon"></span></Link></ButtonCustom>
        <Link to=""><ButtonCustom>Calendário<i className="calendario icon"></i></ButtonCustom></Link>
        <Link to=""><ButtonCustom>Registro<i className="registro icon"></i></ButtonCustom></Link>
        <Link to=""><ButtonCustom>Personalizar<i className="personalizar icon"></i></ButtonCustom></Link>
        <Link to=""><ButtonCustom id="dash">DashBoard<i className="dashboard icon"></i></ButtonCustom></Link>
        </DivPainel>       
    )
};