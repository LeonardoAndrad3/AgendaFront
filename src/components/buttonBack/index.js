import React from "react";
import {ButtonCustom} from "./styled.js"

export default function Button(props){

    return(
        <ButtonCustom $color_b={props.color_b} $color_t={props.color_t} $w={props.w} $h={props.h}>
            {props.value}
        </ButtonCustom>
    );
}