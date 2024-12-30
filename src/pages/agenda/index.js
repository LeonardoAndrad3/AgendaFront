import { useEffect, useState } from "react";
import { Container, Title, SubTitle, Nagivation, EmployeeList } from "./styled.js";
import SwiperAgenda from "./swiperAgenda";
import Button from "components/buttonBack";
import { Link } from "react-router-dom";

import { ServiceList } from "domain/services/ServiceList.js";



import {H1} from "styles/Global/styled" 

const hideButton = (e) =>{
    const button = document.getElementById("buttonViewServices");
    button.parentNode.removeChild(button);
}

export default function Agenda(){

    return (
        <Container>

            <Nagivation>
    
                <Link className="link" to="/">
                    <Button color_b={"black"} color_t={"white"} w={200} h={300} value={"Return"}/>
                </Link>

                <section className="section_Title">           
                    
                    <H1>Agenda</H1>
                    
                    <SubTitle>Filter</SubTitle>

                </section>
            
            </Nagivation>   

            <SwiperAgenda/>

        </Container>
    );
}
