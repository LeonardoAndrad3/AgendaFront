import React from "react";
import {ButtomCustom} from "./styled.js"

export default function Buttom(props){
    return(
        <ButtomCustom $color_b={props.color_b} $color_t={props.color_t} $w={props.w} $h={props.h} $r={props.r}>
            {props.value}
        </ButtomCustom>
    );
}