import React from "react";
import { Container } from "./styled";
import { Outlet } from "react-router-dom";

export default function Login(){
    return(
        <Container>
            <Outlet/>
        </Container>
    )
}