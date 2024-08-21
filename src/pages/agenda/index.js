import React, { useEffect, useState } from "react";
import { Container, Title, SubTitle, Nagivation, EmployeeList } from "./styled.js";
import SwiperAgenda from "./swiperAgenda";
import Button from "components/buttonBack";
import { Link } from "react-router-dom";

import dataServices from "services/request/services"

export default function agenda(){

    const [services,setServices] = useState();

    useEffect(()=>{
       dataServices.then((data)=>{
         setServices(data)
       })
    },[])

    return (
        <Container>

            <Nagivation>
    
                <Link to="/">
                    <Button colorB={"black"} colorT={"white"} w={200} h={300} value={"Return"}/>
                </Link>
                <Link>
                    <Button colorB={"transparent"} colorT={"black"} w={200} h={300} value={"Other model"}/>
                </Link>

                <Title>Agenda</Title>

                <div>
                    <SubTitle>Filter</SubTitle>
                    <EmployeeList>
                        <li className="tag "><span className="tag-mariana"/>Mariana</li>
                        <li className="" ><span className="tag-ivana"/>Ivana</li>
                    </EmployeeList>
                </div>
            
            </Nagivation>


            <SwiperAgenda/> 
        </Container>
    );
}
