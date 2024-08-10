import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import * as S from "swiper/modules"
import 'swiper/css';
import { Container } from "./styled";


export default function SwiperAgenda(){

    return(

        <Container>
            <Swiper
                modules={[S.Grid,S.Pagination]}
                grid={{rows:4,fill:"rows"}}  
                spaceBetween={20}
                slidesPerView={1}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>

            </Swiper>
        </Container>
    );


}