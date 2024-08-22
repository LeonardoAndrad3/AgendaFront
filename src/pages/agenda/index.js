import React, { useEffect, useState } from "react";
import { Container, Title, SubTitle, Nagivation, EmployeeList } from "./styled.js";
import SwiperAgenda from "./swiperAgenda";
import Button from "components/buttonBack";
import { Link } from "react-router-dom";

import { ServiceList } from "domain/services/ServiceList.js";


export default function Agenda(){



    return (
        <Container>

            <Nagivation>
    
                <Link to="/">
                    <Button color_b={"black"} color_t={"white"} w={200} h={300} value={"Return"}/>
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
