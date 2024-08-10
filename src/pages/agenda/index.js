import React from "react";
import { Container } from "./styled.js";
import SwiperAgenda from "./swiperAgenda/index.js";
import ButtonBack from "../../components/buttonBack/index.js";

export default function agenda(){
    return (
        <Container>
            <ButtonBack colorB={"black"} colorT={"white"} w={200} h={300} value={"test"}/>

            <SwiperAgenda/> 
        </Container>
    );
}
