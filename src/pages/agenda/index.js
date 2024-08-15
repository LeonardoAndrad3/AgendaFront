import React from "react";
import { Container, Title, SubTitle } from "./styled.js";
import SwiperAgenda from "./swiperAgenda/index.js";
import Button from "../../components/buttonBack/index.js";

export default function agenda(){
    return (
        <Container>
            <Button colorB={"black"} colorT={"white"} w={200} h={300} value={"test"}/>
            <Button colorB={"transparent"} colorT={"black"} w={200} h={300} value={"Other model"}/>

            <Title>Agenda</Title>
            <SubTitle>Filter</SubTitle>

            <ul>
                <li className="tag tag-mariana">Mariana</li>
                <li className="tag tag-ivana" >Ivana</li>
            </ul>



            <SwiperAgenda/> 
        </Container>
    );
}
