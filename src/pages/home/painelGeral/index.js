import React from "react";
import {DivPainel} from "../styled"
import { H1 } from "styles/Global/styled";
import { Link, Outlet } from "react-router-dom";
import { ButtonCustom } from "components/buttonBack/styled";
import "../styled.css";


export default function PainelGeral(){
    return(

        <DivPainel className="ContentPainel">

        <Link to="../agenda" className="link"><ButtonCustom className="link">Agenda<span className="agenda icon"></span></ButtonCustom></Link>
        <Link to="" className="link"><ButtonCustom className="link">Calendário<i className="calendario icon"></i></ButtonCustom></Link>
        <Link to="" className="link"><ButtonCustom className="link">Registro<i className="registro icon"></i></ButtonCustom></Link>
        <Link to="" className="link"><ButtonCustom className="link">Personalizar<i className="personalizar icon"></i></ButtonCustom></Link>
        <Link to="" className="link"><ButtonCustom id="dash" className="link">DashBoard<i className="dashboard icon"></i></ButtonCustom></Link>
        </DivPainel>       
    )
};