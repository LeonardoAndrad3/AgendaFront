import React from "react";
import {DivPainel} from "../styled"
import { Link, Outlet } from "react-router-dom";
import { ButtomCustom } from "components/buttomBack/styled";
import "../styled.css";

export default function PainelGeralCl(){    
    return(
        <DivPainel className="ContentPainel">
            <Link to="../agenda" className="link"><ButtomCustom className="link">Agenda<span className="agenda icon"></span></ButtomCustom></Link>
            {/* <Link to="../calendario" className="link"><ButtomCustom className="link">Calendário<i className="calendario icon"></i></ButtomCustom></Link> */}
        </DivPainel>       
    )
};