import React from "react";

import "./index.css"

import {Swiper, SwiperSlide} from "swiper/react";
import * as S from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/grid";
import * as ST from "./styled";

export default function SwiperAgenda(){
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
                          
                          <SwiperSlide>
                    <ST.SwiperContainer>       
                        <ST.Service__tag employee="mariana"/>
                        <ST.NameClient>Eduarda</ST.NameClient>
                        <ST.DateService>
                                25/02
                            <ST.TimeHour>
                                09:20 - 10:30
                            </ST.TimeHour>
                        </ST.DateService>
                    </ST.SwiperContainer>             
                </SwiperSlide>

                           
                <SwiperSlide>
                    <ST.SwiperContainer>       
                        <ST.Service__tag employee="mariana"/>
                        <ST.NameClient>Eduarda</ST.NameClient>
                        <ST.DateService>
                                25/02
                            <ST.TimeHour>
                                09:20 - 10:30
                            </ST.TimeHour>
                        </ST.DateService>
                    </ST.SwiperContainer>             
                </SwiperSlide>

                           
                <SwiperSlide>
                    <ST.SwiperContainer>       
                        <ST.Service__tag employee="mariana"/>
                        <ST.NameClient>Eduarda</ST.NameClient>
                        <ST.DateService>
                                25/02
                            <ST.TimeHour>
                                09:20 - 10:30
                            </ST.TimeHour>
                        </ST.DateService>
                    </ST.SwiperContainer>             
                </SwiperSlide>

                           
                <SwiperSlide>
                    <ST.SwiperContainer>       
                        <ST.Service__tag employee="mariana"/>
                        <ST.NameClient>Eduarda</ST.NameClient>
                        <ST.DateService>
                                25/02
                            <ST.TimeHour>
                                09:20 - 10:30
                            </ST.TimeHour>
                        </ST.DateService>
                    </ST.SwiperContainer>             
                </SwiperSlide>

                           
                <SwiperSlide>
                    <ST.SwiperContainer>       
                        <ST.Service__tag employee="mariana"/>
                        <ST.NameClient>Eduarda</ST.NameClient>
                        <ST.DateService>
                                25/02
                            <ST.TimeHour>
                                09:20 - 10:30
                            </ST.TimeHour>
                        </ST.DateService>
                    </ST.SwiperContainer>             
                </SwiperSlide>

                
                
                <SwiperSlide>
                    <ST.SwiperContainer>       
                        <ST.Service__tag employee="mariana"/>
                        <ST.NameClient>Eduarda</ST.NameClient>
                        <ST.DateService>
                                25/02
                            <ST.TimeHour>
                                09:20 - 10:30
                            </ST.TimeHour>
                        </ST.DateService>
                    </ST.SwiperContainer>             
                </SwiperSlide>

                
               

            </Swiper>
        </ST.Container>
    );


}