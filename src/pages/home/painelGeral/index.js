import React from "react";
import {DivPainel} from "../styled"
import { H1 } from "styles/Global/styled";
import { Link, Outlet } from "react-router-dom";
import { ButtomCustom } from "components/buttomBack/styled";
import "../styled.css";
import { useSelector } from "react-redux";


export default function PainelGeral(){    
    return(

        <DivPainel className="ContentPainel">
            <Link to="/agenda" className="link"><ButtomCustom className="link">Agenda<span className="agenda icon"></span></ButtomCustom></Link>
            <Link to="/calendario" className="link"><ButtomCustom className="link">Calendário<i className="calendario icon"></i></ButtomCustom></Link>
            <Link to="" className="link"><ButtomCustom className="link">Registro<i className="registro icon"></i></ButtomCustom></Link>
            <Link to="" className="link"><ButtomCustom className="link">Personalizar<i className="personalizar icon"></i></ButtomCustom></Link>
            <Link to="" className="link"><ButtomCustom id="dash" className="link">DashBoard<i className="dashboard icon"></i></ButtomCustom></Link>
        </DivPainel>       
    )
};