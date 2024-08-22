import React,{useState,useEffect} from "react";

import "./index.css"

import {Swiper, SwiperSlide} from "swiper/react";
import * as S from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/grid";
import * as ST from "./styled";

import dataServices from "services/request/services"
import { ServiceList } from "domain/services/ServiceList";

export default function SwiperAgenda(){

    const [services, setServices] = useState([{}]);

    useEffect(()=>{
       dataServices
       .then(({data}) => {
         setServices(data.content)
       })
    },[])

    const swiperSlide = (service = new ServiceList()) => (
            <SwiperSlide key={service.id}>
                <ST.SwiperContainer>       
                    <ST.ServiceTag key={service.Employee.id} $employee={service.Employee}/>
                    <ST.NameClient key={service.Client.id}>{service.Client}</ST.NameClient>
                    <ST.DateService>
                        {service.date}
                        <ST.TimeHour>
                        {service.date}
                        </ST.TimeHour>
                    </ST.DateService>
                </ST.SwiperContainer>             
            </SwiperSlide>
    )

    return(
        <ST.Container className="container">
            <Swiper
                className="swiper"
                modules={[S.Grid,S.Pagination, S.Navigation]}
                grid={{
                    rows: 4,
                    fill: "column"
                }}  
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
            >

                {services.map((data, i) => {
                    
                        swiperSlide(data)

                })}

            </Swiper>
        </ST.Container>
    );


}