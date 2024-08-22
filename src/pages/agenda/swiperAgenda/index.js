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

    const [services, setServices] = useState([]);

    useEffect(()=>{
       dataServices
       .then(({data}) => {
         setServices(data.content)
       })
    },[]) 

    function ContentServices({data=new ServiceList()}){
        if(data.id !== undefined)
            return(
                    <ST.SwiperContainer>      
                    <ST.ServiceTag $employee={data.employee.name}/>
                    <ST.NameClient>{data.client.name}</ST.NameClient>
                    <ST.DateService>
                            {data.getformatDate()}
                        <ST.TimeHour>
                            {data.formatHours(data.start)}-{data.formatHours(data.end)} 
                        </ST.TimeHour>
                    </ST.DateService>
                    </ST.SwiperContainer>             
            )
    } 


    
    return(
        <ST.Container className="container">
            {services.length > 0 ?
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

                {services.map((data, index) => {
                    return(
                        <SwiperSlide key={index}>
                            <ContentServices
                                data={new ServiceList(data)}
                            />
                        </SwiperSlide>
                    )
                })}
                </Swiper>

                : 
                <div>
                    <p>Without services</p>
                </div>
            }  
        </ST.Container>
    );


}