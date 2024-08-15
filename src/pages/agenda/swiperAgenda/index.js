import React from "react";

import "./index.css"

import {Swiper, SwiperSlide} from "swiper/react";
import * as S from "swiper/modules"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import * as ST from "./styled";

export default function SwiperAgenda(){

    return(
        <ST.Container className="container">
            <Swiper
                className="swiper"
                modules={[S.Grid,S.Pagination, S.Navigation]}
                grid={{rows:1,fill:"column"}}  
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>

            </Swiper>
        </ST.Container>
    );


}